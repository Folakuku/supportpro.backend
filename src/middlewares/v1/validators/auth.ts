import Joi from "joi";

export const register = Joi.object({
  body: Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    middleName: Joi.string().optional(),
    phone: Joi.string().optional(),
    password: Joi.string()
      .min(8)
      .pattern(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#.?&])[A-Za-z\d@$!%*#?.&]{8,}$/
      )
      .required()
      .messages({
        "string.pattern.base":
          "Password must contain at least one number, one letter and one special character",
        "string.min": "Password must be at least 8 characters long",
      }),
  }),
  country: Joi.string().optional(),
}).required();

export const login = Joi.object({
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}).required();

export const profile = Joi.object({
  body: Joi.object({
    bio: Joi.string().email().required(),
    cv: Joi.string().required(),
    experience: Joi.string().required(),
    maxSalary: Joi.number().required(),
    minSalary: Joi.number().required(),
    role: Joi.array().items(Joi.string()),
  }),
}).required();

export const passwordUpdate = Joi.object({
  body: Joi.object({
    newPassword: Joi.string()
      .min(8)
      .pattern(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#.?&])[A-Za-z\d@$!%*#?.&]{8,}$/
      )
      .required()
      .messages({
        "string.pattern.base":
          "Password must contain at least one number, one letter and one special character",
        "string.min": "Password must be at least 8 characters long",
      }),
    oldPassword: Joi.string().required(),
  }),
}).required();

export const recoverPassword = Joi.object({
  body: Joi.object({ email: Joi.string().email().required() }),
}).required();

export const resetPassword = Joi.object({
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(8)
      .pattern(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#.?&])[A-Za-z\d@$!%*#?.&]{8,}$/
      )
      .required()
      .messages({
        "string.pattern.base":
          "Password must contain at least one number, one letter and one special character",
        "string.min": "Password must be at least 8 characters long",
      }),
    token: Joi.string().required(),
  }),
}).required();

export const accountUpdate = Joi.object({
  body: Joi.object({
    email: Joi.string().email(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    phone: Joi.string(),
    bio: Joi.string(),
    image: Joi.string(),
    street: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    country: Joi.string(),
    zip: Joi.string(),
    court: Joi.string(),
    division: Joi.string(),
    chief: Joi.boolean(),
    userId: Joi.string(),
    active: Joi.boolean(),
    onboarded: Joi.boolean(),
    position: Joi.number().when("chief", {
      is: true,
      then: Joi.forbidden(),
    }),
  }),
}).required();
