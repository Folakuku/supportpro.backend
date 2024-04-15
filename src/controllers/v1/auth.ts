import { Response, Request } from "express";
import { sendErrorResponse, sendSuccessResponse } from "@helpers/response";
import * as authController from "@logics/v1/auth";
import { MakeResponse } from "@typings/customs";

const responseHandler = async (res: Response, response: MakeResponse) => {
  if (response.status) {
    return sendSuccessResponse(
      res,
      response.message,
      response.data,
      response.statusCode
    );
  }
  return sendErrorResponse(
    res,
    response.message,
    {},
    response.statusCode || 400
  );
};

export const register = async (req: Request, res: Response) => {
  const response = await authController.createUser(req.body);
  return responseHandler(res, response);
};

export const login = async (req: Request, res: Response) => {
  const response = await authController.loginUser(req.body);
  return responseHandler(res, response);
};
