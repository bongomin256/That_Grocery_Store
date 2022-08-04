const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await User.create({
    firstName: "Peter",
    lastName: "Griffin",
    gardenAddress: "Seattle",
    email: "peter@test.com",
    password: "password",
  });

  console.log("users seeded");

  process.exit();
});
