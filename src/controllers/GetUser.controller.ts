import { GetUsersService } from "../services/GetUser.service";
import { Request, Response } from "express";

export const GetUsersController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await GetUsersService(id);

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
