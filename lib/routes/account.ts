import * as express from "express";
import { Router, Request, Response } from "express";
import { AccountModel, Account } from "../model";

export const accountRoutes = ({
  getAccount,
  createAccount,
  updateAccount,
  deleteAccount,
}: AccountModel): Router => {
  const router = Router();

  router.get("/account/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    let account;

    try {
      account = await getAccount(id);
    } catch (err) {
      // log the error but don't reveal the full details in the API request for security
      console.log("Error getting account", err);
      return res.status(500).send("Error getting account");
    }

    if (!account) {
      // no account found for the given id so returning a '204 no content' code
      return res.status(204).send();
    }

    // before returning the account below the response could be sanitized of any sensitive data
    return res.status(200).send(account);
  });

  router.post(
    "/account",
    express.json(),
    async (req: Request, res: Response) => {
      const { phone, email, address, name }: Partial<Account> = req.body;
      if (!phone || !email || !address || !name)
        return res
          .status(400)
          .send("Insufficient data passed in to create an account");

      let account;

      console.log(name);

      try {
        account = await createAccount({ phone, email, address, name });
      } catch (err) {
        // log the error but don't reveal the full details in the API request for security
        console.log("Error creating account", err);
        return res.status(500).send("Error creating account");
      }

      return res.status(200).send(account);
    }
  );

  router.put(
    "/account",
    express.json(),
    async (req: Request, res: Response) => {
      const { phone, email, address, name }: Partial<Account> = req.body;

      // why am I JSON parsing / JSON stringifying below???
      // it's a quick way to remove nulls / undefined's from an object which means the update
      // request will not overwrite account data that wasn't passed in in the request
      const paramsToUpdate = JSON.parse(
        JSON.stringify({ phone, email, address, name })
      );

      let account;

      try {
        account = await updateAccount(paramsToUpdate);
      } catch (err) {
        // log the error but don't reveal the full details in the API request for security
        console.log("Error updating account", err);
        return res.status(500).send("Error updating account");
      }

      return res.status(200).send(account);
    }
  );

  router.delete("/account/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    let success;

    try {
      success = await deleteAccount(id);
    } catch (err) {
      // log the error but don't reveal the full details in the API request for security
      console.log("Error deleting account", err);
      return res.status(500).send("Error deleting account");
    }

    return res.status(200).send(success);
  });

  return router;
};
