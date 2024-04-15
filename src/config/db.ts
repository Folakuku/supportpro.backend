import { connect } from "mongoose";
import logger from "./logger";
import env from "./env";

let dbUrl: string = env.db_database!;

function newMongoDBConnection(): Promise<void> {
  return new Promise((resolve, reject) => {
    connect(dbUrl)
      .then(() => {
        resolve(logger.log("MongoDB Connected"));
      })
      .catch((error: Error) => {
        reject(logger.log("MongoDB Connection Error: " + error.message));
      });
  });
}

export { newMongoDBConnection };
