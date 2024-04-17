import User from "../../models/v1/user";
import { IUser } from "../../typings/user";
import { HydratedDocument, Types } from "mongoose";

export const createUser = async (
  user: IUser
): Promise<HydratedDocument<IUser>> => {
  return await new User(user).save();
};

export const findUserById = async (id: Types.ObjectId | string) => {
  return await User.findById(id);
};

export const findUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};

export const findUserByMatch = async (data: IUser | Record<string, any>) => {
  return await User.findOne(data);
};

export const findUserByIdAndUpdate = async (
  userId: string | Types.ObjectId,
  data: Partial<IUser>
) => {
  return await User.findByIdAndUpdate(userId, data, { new: true });
};
