import { Response, Request, NextFunction } from "express";
import logger from "../../config/logger";
import { sendErrorResponse, sendSuccessResponse } from "../../helpers/response";
import { MakeResponse } from "../../typings/customs";

export const asyncHandler =
  (cb: Function) => async (req: Request, res: Response) => {
    try {
      await cb(req, res);
    } catch (error: any) {
      logger.logErrorToConsole(error);
      return res.status(500).json({
        status: false,
        error: "Something Went Wrong, Please Try Again Later",
      });
    }
  };

export const responseHandler = async (res: Response, response: MakeResponse) => {
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
