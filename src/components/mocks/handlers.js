import { http, HttpResponse } from "msw";
const users = [
  { name: "ali", id: 1 },
  { name: "reza", id: 2 },
  { name: "mohsen", id: 3 },
];
export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json(users);
  }),
];
