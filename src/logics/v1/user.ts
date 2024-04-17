import { IProfile, IUser } from "../../typings/user";
import * as userRepository from "../../repository/v1/user";
import { makeResponse } from "../../helpers/response";

export const uploadProfile = async (payload: IProfile, user: IUser) => {
  let existingUser = await userRepository.findUserById(user._id);
  if (!existingUser) {
    return makeResponse(false, "Authenticated user no longer exist!", {});
  }

  const profile = await userRepository.createProfile(payload);
  existingUser = await userRepository.findUserByIdAndUpdate(user._id, {
    profile: profile._id,
  });
  existingUser?.set("password", undefined);
  return makeResponse(true, "User profile added", { user: existingUser });
};

export const editProfile = async (payload: IProfile, user: IUser) => {
  let existingUser = await userRepository.findUserById(user._id);
  if (!existingUser) {
    return makeResponse(false, "Authenticated user no longer exist!", {});
  }

  const profile = await userRepository.findProfileByIdAndUpdate(
    user.profile,
    payload
  );

  existingUser?.set("password", undefined);
  return makeResponse(true, "User profile added", { user: existingUser });
};
