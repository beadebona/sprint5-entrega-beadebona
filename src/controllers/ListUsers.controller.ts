import { ListUsersService } from "../services/ListUsers.service";
import { Request, Response } from "express";

export const ListUsersController = async (req: Request, res: Response) => {
  try {
    const users = await ListUsersService();
    return res.status(200).send(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};
