import { DeleteUserService } from "../services/DeleteUser.service";
import { Request, Response } from "express";

export const DeleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await DeleteUserService(id);
    return res.status(200).send(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};
