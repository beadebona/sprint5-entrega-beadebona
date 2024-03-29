import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";

export const ListUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  return users;
};
