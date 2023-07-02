import { createAppRouter } from ".";
import { accountModel } from "./model";
import { accountRoutes } from "./routes";
import { startServer } from "./server";

// I've used composition routes in this API as seen below to allow it to be extended and stubbed out easier.
// By passing the model / model functions in at this level we are able to easily pass a stub model in.
// This method also makes writing tests easier as the model functions can be stubbed / simulated with test data.
const appRouter = createAppRouter({
  apiRoutes: [accountRoutes(accountModel)], // see here we can plug in whatever model we like to the route (a test model for example)
});

try {
  startServer(appRouter);
} catch (err) {
  console.log("Server error on startup", err);
  process.exit(1);
}
