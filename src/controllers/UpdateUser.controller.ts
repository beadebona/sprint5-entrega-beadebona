import { UpdateUserService } from "../services/UpdateUser.service";
import { Request, Response } from "express";

export const UpdateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, age, password } = req.body;
    const user = await UpdateUserService({
      id,
      name,
      email,
      age,
      password,
    });
    return res.status(200).send(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};
