import fetch from "node-fetch";

export const resolvers = {
  Query: {
    users: () => fetch('https://reqres.in/api/users').then(r => r.json()),
  },
};