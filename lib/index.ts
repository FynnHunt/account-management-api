import { Router } from "express";

type AppConfig = {
  apiRoutes: Router[];
};

export const createAppRouter = ({ apiRoutes }: AppConfig) => {
  const app = Router();

  apiRoutes.forEach((route) => app.use("/api", route));

  return app;
};
