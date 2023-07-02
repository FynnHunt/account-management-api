import * as express from "express";
import { Router } from "express";

const port = "3000";

export const startServer = (
  appRouter: Router,
  serviceName = "account management api"
) => {
  const app = express();
  app.use(appRouter);
  app.listen(port, () => {
    console.log(`${serviceName} listening on port ${port}`);
  });
  return app;
};
