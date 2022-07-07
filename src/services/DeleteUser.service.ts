import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";
import { IUser } from "../interfaces";

export const DeleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const found = await userRepository.findOneBy({ id: id });

  if (!found) {
    throw new Error("User not found");
  }

  await userRepository.remove(found);

  return { message: "User deleted" };
};
