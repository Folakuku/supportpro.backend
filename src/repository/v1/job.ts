import Job from "../../models/v1/job";
import { IJob } from "../../typings/job";
import { HydratedDocument, Types } from "mongoose";

export const createJob = async (job: IJob): Promise<HydratedDocument<IJob>> => {
  return await new Job(job).save();
};

export const findJobById = async (id: Types.ObjectId | string) => {
  return await Job.findById(id);
};

export const findAllJobs = async () => {
  return await Job.find();
};

export const findJobByMatch = async (data: IJob | Record<string, any>) => {
  return await Job.findOne(data);
};

export const findJobByIdAndUpdate = async (
  JobId: string | Types.ObjectId,
  data: Partial<IJob>
) => {
  return await Job.findByIdAndUpdate(JobId, data, { new: true });
};
