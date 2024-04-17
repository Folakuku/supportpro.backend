import { sendErrorResponse } from "../../helpers/response";
import { Request, Response, NextFunction, RequestHandler } from "express";
import { verifyToken } from "../../helpers/utils";
import env from "../../config/env";
import { findUserById } from "../../repository/v1/user";

export const loginRequired = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const token = req.headers.authorization;
  if (!token) {
    return sendErrorResponse(res, "LOGIN_REQUIRED", {}, 401);
  }
  if (!token.split(" ")[1]) {
    return sendErrorResponse(res, "LOGIN_REQUIRED", {}, 401);
  }
  const verified = await verifyToken(
    token.split(" ")[1]!,
    env.jwt_secret!,
    findUserById
  );
  if (!verified.status) {
    return sendErrorResponse(res, verified.message, {}, 401);
  }
  req.user = verified.data!.user;
  return next();
};
