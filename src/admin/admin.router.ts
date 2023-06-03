import * as express from "express";
import basicAuth from "express-basic-auth";
import { testrouter } from "../testtable/testtable.router";
import { cronRouter } from "../cron/cron.router";

/** Controls admin actions */
export const adminRouter = express.Router();

const DEFAULT_ADMIN_PASSWORD = "admin123";

/** Either admin password defined in POEM_SERVER_ADMIN_PASSWORD env variable or default password admin123 */
const adminPassword = process.env.POEM_SERVER_ADMIN_PASSWORD
  ? process.env.POEM_SERVER_ADMIN_PASSWORD
  : DEFAULT_ADMIN_PASSWORD;

adminRouter.use(
  basicAuth({
    users: { admin: adminPassword },
  })
);

adminRouter.use("/test", testrouter);

adminRouter.use("/cron", cronRouter);
