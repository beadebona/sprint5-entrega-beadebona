import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUser.controller";
import { DeleteUserController } from "../controllers/DeleteUser.controller";
import { GetUsersController } from "../controllers/GetUser.controller";
import { ListUsersController } from "../controllers/ListUsers.controller";
import { UpdateUserController } from "../controllers/UpdateUser.controller";

export const routes = Router();

routes.get("", ListUsersController);
routes.post("", CreateUserController);
routes.get("/:id", GetUsersController);
routes.patch("/:id", UpdateUserController);
routes.delete("/:id", DeleteUserController);
