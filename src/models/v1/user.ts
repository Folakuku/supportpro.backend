import { Schema, model } from "mongoose";
import * as func from "@helpers/func";
import { Roles } from "@typings/customs";
import { IUser } from "@typings/user";

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      set: func.convertToSentenceCase,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
    onboarded: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: Roles,
    },
    recoveryCode: String,
    recoveryCodeExpiry: Date,
    verificationCode: String,
    verificationCodeExpiry: Date,
  },
  { timestamps: true }
);

export default model<IUser>("user", userSchema);
