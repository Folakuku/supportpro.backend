import Joi from "joi";
import { Experience } from "../../../typings/customs";

export const profile = Joi.object({
  body: Joi.object({
    bio: Joi.string().required(),
    cv: Joi.string().required(),
    experience: Joi.string()
      .required()
      .valid(...Object.values(Experience)),
    maxSalary: Joi.number().required(),
    minSalary: Joi.number().required(),
    role: Joi.array().items(Joi.string()),
  }),
}).required();
