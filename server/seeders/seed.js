const db = require("../config/connection");
const { User, Product, Order } = require("../models");

db.once("open", async () => {
  //   await Category.deleteMany();

  //   const categories = await Category.insertMany([
  //     { name: "vegetables" },
  //     { name: "fruits" },
  //   ]);

  //   console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "carrot",
      description: "fresh organic multi colored carrots",
      image: "carrot.jpg",
      //   category: categories[0]._id,
      price: 2.99,
      quantity: 500,
    },
    {
      name: "onion",
      description: "Fresh Organic Red Onion",
      image: "redOnion.jpg",
      //   category: categories[0]._id,
      price: 1.99,
      quantity: 500,
    },
    {
      name: "cabbage",
      //   category: categories[0]._id,
      description: "fresh organic head of cabbage",
      image: "cabbage.jpg",
      price: 7.99,
      quantity: 20,
    },
    {
      name: "basil",
      //   category: categories[0]._id,
      description: "Bundles of fresh organic basil leaves",
      image: "basil.jpg",
      price: 3.99,
      quantity: 50,
    },
    {
      name: "celery",
      //   category: categories[0]._id,
      description: "bundles of fresh organic Celery",
      image: "celery.jpg",
      price: 14.99,
      quantity: 100,
    },
    {
      name: "apple",
      //   category: categories[1]._id,
      description: "Fresh Organic Honeycrisp Apples",
      image: "apple.jpg",
      price: 2.99,
      quantity: 30,
    },
    {
      name: "strawberries",
      //   category: categories[1]._id,
      description: "fresh organic box of strawberries",
      image: "strawberries.jpg",
      price: 2.99,
      quantity: 30,
    },
    {
      name: "corn",
      //   category: categories[0]._id,
      description: "fresh organic ears of golden corn",
      image: "corn.jpg",
      price: 1.99,
      quantity: 300,
    },
    {
      name: "oranges",
      //   category: categories[1]._id,
      description: "fresh organic Navel oranges",
      image: "orange.jpg",
      price: 1.99,
      quantity: 1000,
    },
    {
      name: "pumpkin",
      //   category: categories[1]._id,
      description: "fresh organic Pumpkins",
      image: "pumkin.jpg",
      price: 9.99,
      quantity: 1000,
    },
    {
      name: "potato",
      //   category: categories[0]._id,
      description: "fresh organic russet potato",
      image: "potato.jpg",
      price: 1.99,
      quantity: 100,
    },
    {
      name: "tomato",
      //   category: categories[1]._id,
      description: "Fresh organic Heirloom tomato",
      image: "tomato.jpg",
      price: 2.99,
      quantity: 600,
    },
  ]);

  console.log("products seeded");

  await User.create({
    firstName: "Peter",
    lastName: "Griffin",
    gardenAddress: "Seattle",
    email: "peter@test.com",
    password: "password",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  console.log("users seeded");

  process.exit();
});
