import { Response, Request } from "express";
import * as authController from "../../logics/v1/auth";
import { responseHandler } from "../../middlewares/v1/handler";

export const register = async (req: Request, res: Response) => {
  const response = await authController.createUser(req.body);
  return responseHandler(res, response);
};

export const login = async (req: Request, res: Response) => {
  const response = await authController.loginUser(req.body);
  return responseHandler(res, response);
};
