import { MakeResponse } from "../typings/customs";
import { Response } from "express";
import { ValidationError } from "joi";

export const makeResponse = (
  status: boolean,
  message: string,
  data?: Record<string, any>,
  statusCode?: number
): MakeResponse => {
  return {
    status,
    message,
    data,
    statusCode,
  };
};

export const sendSuccessResponse = (
  res: Response,
  message: string,
  data?: Record<string, any>,
  statusCode: number = 200
): Response => {
  return res.status(statusCode).json({
    status: true,
    message,
    data: data,
  });
};

export const sendErrorResponse = (
  res: Response,
  message: string,
  data: Record<string, any>,
  statusCode: number = 400
): Response => {
  return res.status(statusCode).json({
    status: false,
    message,
    data: data,
  });
};

export const handleValidationError = (
  validateErrorData: ValidationError,
  res: Response
): Response => {
  const message = validateErrorData.details[0]!.message;
  return sendErrorResponse(res, message, {}, 400);
};
