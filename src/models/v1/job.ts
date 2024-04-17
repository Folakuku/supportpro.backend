import { Schema, model } from "mongoose";
import { Experience } from "../../typings/customs";
import { IJob } from "../../typings/job";

const jobSchema = new Schema<IJob>({
  //@TODO switch role to ID
  role: {
    type: String,
    required: true,
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
  },
  maxSalary: {
    type: Number,
    required: true,
  },
  minSalary: {
    type: Number,
    required: true,
  },
  experienceLevel: {
    enum: Experience,
    type: String,
    required: true,
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  address: {
    type: String,
    required: true,
  },
  remote: {
    type: Boolean,
    required: true,
  },
  responsibilities: {
    type: [String],
    required: false,
    lowercase: true,
  },
  skills: {
    type: [String],
    required: false,
    lowercase: true,
  },
  goals: {
    type: [String],
    required: false,
    lowercase: true,
  },
});

export default model<IJob>("job", jobSchema);
