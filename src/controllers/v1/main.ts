import { Response, Request, NextFunction } from "express";
import { sendSuccessResponse } from "@helpers/response";

export const baseEndpoint = (req: Request, res: Response) => {
  return sendSuccessResponse(res, "Welcome to the base endpoint", {
    app: "SupportPro",
    version: "1.0.0",
    desc: "Support Pro Backend Server",
  });
};
