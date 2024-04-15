import { Router } from "express";

import main from "./main";
import auth from "./auth";

export default (router: Router) => {
  main(router);
  auth(router);
};
