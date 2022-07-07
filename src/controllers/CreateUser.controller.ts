import { CreateUserService } from "../services/CreateUser.service";
import { Request, Response } from "express";

export const CreateUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age } = req.body;
    const user = await CreateUserService({ name, email, password, age });
    return res.status(201).send(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};
