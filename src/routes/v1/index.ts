import { Router } from "express";

import main from "./main";
import auth from "./auth";
import job from "./job";

export default (router: Router) => {
  main(router);
  auth(router);
  job(router);
};
