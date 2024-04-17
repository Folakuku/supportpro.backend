import { Router } from "express";

const router = Router();

import * as user from "../../controllers/v1/user";
import validate from "../../middlewares/v1/validators/validate";
import * as userValidator from "../../middlewares/v1/validators/user";
import { asyncHandler } from "../../middlewares/v1/handler";
import { loginRequired } from "../../middlewares/v1/auth";

router.post(
  "/profile",
  loginRequired,
  validate(userValidator.profile, { body: true }),
  asyncHandler(user.uploadProfile)
);

router.patch(
  "/profile",
  loginRequired,
  validate(userValidator.profile, { body: true }),
  asyncHandler(user.editProfile)
);

export default (app: Router) => app.use("/user", router);
