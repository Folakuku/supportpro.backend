import { Application, Request, Response, Router } from "express";
import v1 from "../routes/v1";

export default function versionRoutes(app: Application): void {
  // version 1
  const router = Router();
  v1(router);
  app.use("/v1", router);

  // 404 Error Handler
  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({
      status: false,
      error: "Page not found",
    });
  });
}
