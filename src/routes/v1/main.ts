import { Router } from "express";

const router = Router();

import * as main from "@controllers/v1/main";

router.all("/", main.baseEndpoint);

export default (app: Router) => app.use("/", router);
