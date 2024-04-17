import { Router } from "express";

import main from "./main";
import auth from "./auth";
import job from "./job";
import user from "./user";

export default (router: Router) => {
  main(router);
  auth(router);
  user(router);
  job(router);
};
