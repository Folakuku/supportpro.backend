import { Response, Request, NextFunction } from "express";
import logger from "../../config/logger";

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
