import Joi from 'joi';

export const tokenOnlySchema = Joi.object({
  body: Joi.object({
    token: Joi.string().required(),
  }).required(),
});
