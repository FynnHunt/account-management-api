import { testAccount } from "../data/accountData";
import { v4 } from "uuid";

export interface Account {
  id: string;
  email: string;
  name: string;
  address: string;
  phone: string;
}

type GetAccount = (id: string) => Promise<Account>;
type CreateAccount = (account: Partial<Account>) => Promise<Account>;
type UpdateAccount = (account: Partial<Account>) => Promise<Account>;
type DeleteAccount = (id: string) => Promise<boolean>;

export interface AccountModel {
  getAccount: GetAccount;
  createAccount: CreateAccount;
  updateAccount: UpdateAccount;
  deleteAccount: DeleteAccount;
}

export const accountModel: AccountModel = {
  getAccount: (id) => {
    console.log(`Getting account with id ${id}`);
    try {
      // Here I would query the database for an account with the passed in id using Knex
      // I have stubbed out the data persistence layer so I am instead returning a test account to simulate this
      return Promise.resolve(testAccount);
    } catch {
      return Promise.reject("Failed getting account from db");
    }
  },
  createAccount: (account) => {
    console.log(`Creating new account`);
    const id = v4(); // randomly generated v4 uuid
    const accountToCreate = { ...account, id } as Account;
    try {
      // Here I would create a new account in the db using Knex
      // I have stubbed out the data persistence layer so I am instead returning a test account to simulate this
      return Promise.resolve(accountToCreate);
    } catch {
      return Promise.reject("Failed creating new account");
    }
  },
  updateAccount: (account) => {
    console.log(`Updating account with id ${account.id}`);
    if (!account.id) {
      return Promise.reject("No id passed in in update request");
    }
    try {
      // Here I would update the account in the db using Knex
      // I have stubbed out the data persistence layer so I am instead returning a test account to simulate this
      return Promise.resolve(testAccount);
    } catch {
      return Promise.reject("Failed creating new account");
    }
  },
  deleteAccount: (id) => {
    console.log(`Deleting account with id ${id}`);
    try {
      // Here I would delete the account in the db using Knex
      // I have stubbed out the data persistence layer so I am instead returning true to simulate this
      return Promise.resolve(true);
    } catch {
      return Promise.reject("Failed creating new account");
    }
  },
};
