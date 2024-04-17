import * as jobRepository from "../../repository/v1/job";
import { makeResponse } from "../../helpers/response";
import { IJob } from "../../typings/job";

export const createJob = async (payload: IJob) => {
  //@TODO check if job exists
  let job = await jobRepository.createJob(payload);
  return makeResponse(true, "Job posted successfully", job, 200);
};
