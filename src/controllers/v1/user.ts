import { Response, Request } from "express";
import * as userController from "../../logics/v1/user";
import { responseHandler } from "../../middlewares/v1/handler";

export const uploadProfile = async (req: Request, res: Response) => {
  const response = await userController.uploadProfile(req.body, req.user);
  return responseHandler(res, response);
};

export const editProfile = async (req: Request, res: Response) => {
  const response = await userController.editProfile(req.body, req.user);
  return responseHandler(res, response);
};
