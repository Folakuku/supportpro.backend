import { Response, Request } from "express";
import * as jobController from "../../logics/v1/job";
import { responseHandler } from "../../middlewares/v1/handler";

export const create = async (req: Request, res: Response) => {
  const response = await jobController.createJob(req.body);
  return responseHandler(res, response);
};
