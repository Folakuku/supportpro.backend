import { Types } from "mongoose";

export interface IUser {
  _id: Types.ObjectId | string;
  email: string;
  name: string;
  password: string;
  emailVerified: boolean;
  phone?: string;
  gender?: string;
  image?: string;
  country?: string;
  userRole: string;
  company?: Types.ObjectId | string;
  recoveryCode: string | null;
  recoveryCodeExpiry: Date | null;
  verificationCode: string | null;
  verificationCodeExpiry: Date | null;
  active: boolean;
  onboarded: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IProfile {
  bio: string;
  cv: string;
  role: Types.Array<string>;
  experience: string;
  maxSalary: number;
  minSalary: number;
}

export interface IOrganization {
  _id: Types.ObjectId | string;
  email: string;
  name: string;
  password: string;
  emailVerified: boolean;
  size: number;
  logo: string;
  website: string;
  address: string;
  industry: Types.ObjectId | string;
  logoInEmail: boolean;
  logoInReport: boolean;
  twitter: string;
  linkedin: string;
  facebook: string;
  role: string;
  recoveryCode: string | null;
  recoveryCodeExpiry: Date | null;
  verificationCode: string | null;
  verificationCodeExpiry: Date | null;
  active: boolean;
  onboarded: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IUserPasswordUpdate {
  oldPassword: string;
  newPassword: string;
  authUserId: Types.ObjectId;
}

export interface IEmailOnlyPayload {
  email: string;
}
