import { Response, Request } from "express";
import { sendErrorResponse, sendSuccessResponse } from "../../helpers/response";
import * as jobController from "../../logics/v1/job";
import { MakeResponse } from "../../typings/customs";

//@TODO export to middleware
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

export const create = async (req: Request, res: Response) => {
  const response = await jobController.createJob(req.body);
  return responseHandler(res, response);
};
