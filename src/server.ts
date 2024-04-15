import "dotenv/config";
import logger from "./config/logger";
import env from "./config/env";
import express, { Application } from "express";
import { newMongoDBConnection } from "./config/db";
import versionRoutes from "./version/v1";
import cors from "cors";
import helmet from "helmet";

const PORT = env.port;

export default async function startApplication(app: Application): Promise<void> {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.raw());
  app.use(cors());
  app.use(
    helmet({
      frameguard: {
        action: "deny", // change to 'sameorigin' if you want to allow iframes
      },
    })
  );

  // enable logging
  app.use(logger.logan);
  versionRoutes(app);

  // connect to mongodb via mongoose
  await newMongoDBConnection();

  app.listen(PORT, async () => {
    logger.log(`All connections established successfully 🚀`);
    logger.log(`App is listening on http://localhost:${PORT}`);
  });
}
