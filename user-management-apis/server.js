import fs from "fs";
import http from "http";
import { createUsers, getUsers, updateUsers, deleteUsers } from "./app.js";

const PORT = 3000;


const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("<h1>Welcome to the User Management Server (APIs)</h1>");
  } else if (request.url === "/create-users") {
    createUsers();
    response.end("<h2>User Created!</h2>");
  } else if (request.url === "/get-users") {
    getUsers();
    response.end("<h2>Users Got!</h2>");
  } else if (request.url === "/update-users") {
    updateUsers();
    response.end("<h2>Users Updated</h2>!");
  } else if (request.url === "/delete-users") {
    deleteUsers();
    response.end("<h2>User Deleted</h2>!");
  }
});

server.listen(PORT, () =>
  console.log(
    `Server is running on http://localhost:${PORT} with Port ${PORT}`,
  ),
);
