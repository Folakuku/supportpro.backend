import { Router } from "express";

const router = Router();

import * as job from "../../controllers/v1/job";
import validate from "../../middlewares/v1/validators/validate";
// import * as authValidator from "../../middlewares/v1/validators/auth";
import { asyncHandler } from "../../middlewares/v1/handler";

router.post(
  "/create",
  // validate(authValidator.register, { body: true }),
  asyncHandler(job.create)
);

export default (app: Router) => app.use("/job", router);
