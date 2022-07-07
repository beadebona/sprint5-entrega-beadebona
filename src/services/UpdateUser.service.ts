import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";
import * as bcrypt from "bcryptjs";
import { IUser } from "../interfaces";

export const UpdateUserService = async ({
  id,
  name,
  email,
  age,
  password,
}: IUser) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });
  if (!user) {
    throw new Error("User not found");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const updated = {
    ...user,
    name: name,
    email: email,
    age: age,
    password: password ? hashedPassword : password,
    updated_at: new Date(),
  };
  const updatedUsers = await userRepository.save(updated);
  return updated;
};
