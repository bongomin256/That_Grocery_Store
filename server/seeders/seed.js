const db = require("../config/connection");
const { User, Product, Order } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "vegetables" },
    { name: "fruits" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "carrot",
      description: "fresh organic multi colored carrots",
      image: "carrot.jpg",
      category: categories[0]._id,
      price: 2.99,
      quantity: 500,
      user: User[0]._id
    },
    {
      name: "onion",
      description: "Fresh Organic Red Onion",
      image: "redOnion.jpg",
      category: categories[0]._id,
      price: 1.99,
      quantity: 500,
      user: User[0]._id
    },
    {
      name: "cabbage",
      category: categories[0]._id,
      description: "fresh organic head of cabbage",
      image: "cabbage.jpg",
      price: 7.99,
      quantity: 20,
      user: User[1]._id
    },
    {
      name: "basil",
      category: categories[0]._id,
      description: "Bundles of fresh organic basil leaves",
      image: "basil.jpg",
      price: 3.99,
      quantity: 50,
      user: User[1]._id
    },
    {
      name: "celery",
      category: categories[0]._id,
      description: "bundles of fresh organic Celery",
      image: "celery.jpg",
      price: 14.99,
      quantity: 100,
      user: User[0]._id
    },
    {
      name: "apple",
      category: categories[1]._id,
      description: "Fresh Organic Honeycrisp Apples",
      image: "apple.jpg",
      price: 2.99,
      quantity: 30,
      user: User[0]._id
    },
    {
      name: "strawberries",
      category: categories[1]._id,
      description: "fresh organic box of strawberries",
      image: "strawberries.jpg",
      price: 2.99,
      quantity: 30,
      user: User[0]._id
    },
    {
      name: "corn",
      category: categories[0]._id,
      description: "fresh organic ears of golden corn",
      image: "corn.jpg",
      price: 1.99,
      quantity: 300,
      user: User[1]._id
    },
    {
      name: "oranges",
      category: categories[1]._id,
      description: "fresh organic Navel oranges",
      image: "orange.jpg",
      price: 1.99,
      quantity: 1000,
      user: User[1]._id
    },
    {
      name: "pumpkin",
      category: categories[1]._id,
      description: "fresh organic Pumpkins",
      image: "pumpkin.jpg",
      price: 9.99,
      quantity: 1000,
      user: User[1]._id
    },
    {
      name: "potato",
      category: categories[0]._id,
      description: "fresh organic russet potato",
      image: "potato.jpg",
      price: 1.99,
      quantity: 100,
      user: User[0]._id
    },
    {
      name: "tomato",
      category: categories[1]._id,
      description: "Fresh organic Heirloom tomato",
      image: "tomato.jpg",
      price: 2.99,
      quantity: 600,
      user: User[0]._id
    },
    {
      name: "lettuce",
      category: categories[0]._id,
      description: "fresh organic Green leaf lettuce",
      image: "lettuce.jpg",
      price: 2.99,
      quantity: 40,
      user: User[0]._id
    },
    {
      name: "radish",
      category: categories[0]._id,
      description: "fresh organic Radishes",
      image: "radish.jpg",
      price: 4.99,
      quantity: 200,
      user: User[0]._id
    },
    {
      name: "beet",
      category: categories[0]._id,
      description: "fresh organic red beets",
      image: "beet.jpg",
      price: 1.99,
      quantity: 240,
      user: User[0]._id
    },
    {
      name: "garlic",
      category: categories[0]._id,
      description: "fresh organic Garlic Cloves",
      image: "garlic.jpg",
      price: 3.99,
      quantity: 450,
      user: User[0]._id
    },
    {
      name: "leek",
      category: categories[0]._id,
      description: "fresh organic water leeks",
      image: "leek.jpg",
      price: 4.99,
      quantity: 150,
      user: User[0]._id
    },
    {
      name: "broccoli",
      category: categories[0]._id,
      description: "fresh organic Head of broccoli",
      image: "broccoli.jpg",
      price: 4.99,
      quantity: 80,
      user: User[0]._id
    },
    {
      name: "peas",
      category: categories[0]._id,
      description: "fresh organic Snap Peas",
      image: "peas.jpg",
      price: 1.99,
      quantity: 640,
      user: User[0]._id
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

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

  await User.create({
    firstName: "Chris",
    lastName: "Griffin",
    gardenAddress: "Seattle1",
    email: "chris@test.com",
    password: "password",
  });

  console.log("User seeded");

  process.exit();
});
