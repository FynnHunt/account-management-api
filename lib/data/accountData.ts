import { Account } from "../model";

// This file is being used to stub out the data persistence layer / replace a database
export const testAccount: Account = {
  id: "91377e4f-294a-48bf-bdf7-8fae5bdc3b26",
  email: "test@email.com",
  name: "James Bond",
  address: "The shire",
  phone: "07123456789",
};

// id has be omitted from the object below as usually on a create route I would randomly generate the id
export const testCreateAccount: Partial<Account> = {
  email: "test@email.com",
  name: "James Bond",
  address: "The shire",
  phone: "07123456789",
};
