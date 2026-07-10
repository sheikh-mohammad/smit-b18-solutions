import fs from "fs";
import { name, classNum, age } from "./index.js";

const users = [
  {
    name: "Sheikh Mohammmad",
    age: 14,
    class: 9,
  },
];

const createUsers = () => {
  fs.writeFile("./users.json", JSON.stringify(users), (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("User created");
    }
  });
};

const getUsers = () => {
  fs.readFile("./users.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Users:");
      console.log(data);
    }
  });
};

const updateUsers = () => {
  const data = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

  const newUser = {
    name,
    class: classNum,
    age,
  };

  if (name == "" || classNum == "" || age == "") {
    console.log("Name or class or age is not provided!");
    return;
  } else {
    data.push(newUser);
    fs.writeFileSync("./users.json", JSON.stringify(data));
    console.log("User updated");
  }
};

const deleteUsers = () => {
  fs.unlink("./users.json", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("User deleted");
    }
  });
};

export { createUsers, getUsers, updateUsers, deleteUsers };
