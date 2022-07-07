import { IUser, IUserCreate } from "../interfaces";
import { v4 as uuid } from "uuid";

import * as bcrypt from "bcryptjs";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";

export const CreateUserService = async ({
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const alreadyExists = users.find((user) => user.email === email);

  if (alreadyExists) {
    throw new Error("Email already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User();
  user.name = name;
  user.email = email;
  user.age = age;
  user.password = hashedPassword;
  user.created_at = new Date();

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};
