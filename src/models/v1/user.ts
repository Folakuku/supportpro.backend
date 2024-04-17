import { Schema, model } from "mongoose";
import * as func from "../../helpers/func";
import { Roles } from "../../typings/customs";
import { IProfile, IUser } from "../../typings/user";

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
    firstName: {
      type: String,
      required: true,
      set: func.firstCharToUpperCase,
    },
    lastName: {
      type: String,
      required: true,
      set: func.firstCharToUpperCase,
    },
    middleName: {
      type: String,
      required: false,
      set: func.firstCharToUpperCase,
    },
    phone: {
      type: String,
      required: false,
    },
    profile: {
      type: Schema.Types.ObjectId,
      ref: "profile",
      required: false,
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
    userRole: {
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

const profileSchema = new Schema<IProfile>({
  bio: {
    type: String,
    required: true,
  },
  cv: {
    type: String,
    required: true,
  },
  role: {
    type: [String],
    required: false,
    lowercase: true,
  },
  experience: {
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
});

export const User = model<IUser>("user", userSchema);
export const Profile = model<IProfile>("profile", profileSchema);
