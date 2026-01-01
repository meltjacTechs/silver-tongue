import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://nyc.cloud.appwrite.io/v1") // Use the NYC regional endpoint
  .setProject("69563a1800125762e87e");

export const account = new Account(client);