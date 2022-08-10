const db = require("../config/connection");
const { User, Product, Order } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "vegetables" },
    { name: "fruits" },
    { name: "herbs" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "carrot",
      description: "fresh organic multi colored carrots",
      image: "../../client/public/images/carrot.png",
      category: categories[0]._id,
      price: 2.99,
      quantity: 500,
      user: User[0]._id
    },
    {
      name: "onion",
      description: "Fresh Organic Red Onion",
      image: "../../client/public/images/redOnion.png",
      category: categories[0]._id,
      price: 1.99,
      quantity: 500,
      user: User[0]._id
    },
    {
      name: "cabbage",
      category: categories[0]._id,
      description: "fresh organic head of cabbage",
      image: "../../client/public/images/cabbage.png",
      price: 7.99,
      quantity: 20,
      user: User[1]._id
    },
    {
      name: "basil",
      category: categories[2]._id,
      description: "Bundles of fresh organic basil leaves",
      image: "../../client/public/images/basil.png",
      price: 3.99,
      quantity: 50,
      user: User[1]._id
    },
    {
      name: "celery",
      category: categories[0]._id,
      description: "bundles of fresh organic Celery",
      image: "../../client/public/images/celery.png",
      price: 14.99,
      quantity: 100,
      user: User[0]._id
    },
    {
      name: "apple",
      category: categories[1]._id,
      description: "Fresh Organic Honeycrisp Apples",
      image: "../../client/public/images/apple.png",
      price: 2.99,
      quantity: 30,
      user: User[0]._id
    },
    {
      name: "strawberries",
      category: categories[1]._id,
      description: "fresh organic box of strawberries",
      image: "../../client/public/images/strawberry.png",
      price: 2.99,
      quantity: 30,
      user: User[0]._id
    },
    {
      name: "corn",
      category: categories[0]._id,
      description: "fresh organic ears of golden corn",
      image: "../../client/public/images/corn.png",
      price: 1.99,
      quantity: 300,
      user: User[1]._id
    },
    {
      name: "oranges",
      category: categories[1]._id,
      description: "fresh organic Navel oranges",
      image: "../../client/public/images/orange.png",
      price: 1.99,
      quantity: 1000,
      user: User[1]._id
    },
    {
      name: "potato",
      category: categories[0]._id,
      description: "fresh organic russet potato",
      image: "../../client/public/images/potato.png",
      price: 1.99,
      quantity: 100,
      user: User[0]._id
    },
    {
      name: "tomato",
      category: categories[1]._id,
      description: "Fresh organic Heirloom tomato",
      image: "../../client/public/images/tomato.png",
      price: 2.99,
      quantity: 600,
      user: User[0]._id
    },
    {
      name: "lettuce",
      category: categories[0]._id,
      description: "fresh organic Green leaf lettuce",
      image: "../../client/public/images/lettuce.png",
      price: 2.99,
      quantity: 40,
      user: User[0]._id
    },
    {
      name: "radish",
      category: categories[0]._id,
      description: "fresh organic Radishes",
      image: "../../client/public/images/radish.png",
      price: 4.99,
      quantity: 200,
      user: User[0]._id
    },
    {
      name: "beet",
      category: categories[0]._id,
      description: "fresh organic red beets",
      image: "../../client/public/images/beet.png",
      price: 1.99,
      quantity: 240,
      user: User[0]._id
    },
    {
      name: "garlic",
      category: categories[0]._id,
      description: "fresh organic Garlic Cloves",
      image: "../../client/public/images/garlic.png",
      price: 3.99,
      quantity: 450,
      user: User[2]._id
    },
    {
      name: "leek",
      category: categories[0]._id,
      description: "fresh organic water leeks",
      image: "../../client/public/images/leek.png",
      price: 4.99,
      quantity: 150,
      user: User[2]._id
    },
    {
      name: "broccoli",
      category: categories[0]._id,
      description: "fresh organic Head of broccoli",
      image: "../../client/public/images/broccoli.png",
      price: 4.99,
      quantity: 80,
      user: User[2]._id
    },
    {
      name: "peas",
      category: categories[0]._id,
      description: "fresh organic Snap Peas",
      image: "../../client/public/images/peas.png",
      price: 1.99,
      quantity: 640,
      user: User[2]._id
    },
    {
      name: "blueberries",
      category: categories[1]._id,
      description: "Fresh Organic Blueberries",
      image: "../../client/public/images/blueberry.png",
      price: 5.99,
      quantity: 130,
      user: User[2]._id
    },
    {
      name: "cherries",
      category: categories[1]._id,
      description: "Fresh Organic cherries",
      image: "../../client/public/images/cherry.png",
      price: 3.99,
      quantity: 240,
      user: User[2]._id
    },
    {
      name: "watermelon",
      category: categories[1]._id,
      description: "Fresh Organic Watermelon",
      image: "../../client/public/images/watermelon.png",
      price: 6.99,
      quantity: 360,
      user: User[2]._id
    },
    {
      name: "raspberries",
      category: categories[1]._id,
      description: "Fresh Organic Raspberries",
      image: "../../client/public/images/raspberry.png",
      price: 8.99,
      quantity: 170,
      user: User[2]._id
    },
    {
      name: "cucumber",
      category: categories[1]._id,
      description: "Fresh Organic cucumber",
      image: "../../client/public/images/cucumber.png",
      price: 4.99,
      quantity: 450,
      user: User[2]._id
    },
    {
      name: "peppers",
      category: categories[1]._id,
      description: "Fresh Organic Red Peppers",
      image: "../../client/public/images/pepper.png",
      price: 4.99,
      quantity: 560,
      user: User[2]._id
    },
    {
      name: "grapes",
      category: categories[1]._id,
      description: "Fresh Organic Concord Grapes",
      image: "../../client/public/images/grape.png",
      price: 5.99,
      quantity: 150,
      user: User[1]._id
    },
    {
      name: "eggplant",
      category: categories[1]._id,
      description: "Fresh Organic eggplant",
      image: "../../client/public/images/eggplant.png",
      price: 3.99,
      quantity: 30,
      user: User[1]._id
    },
    {
      name: "bananas",
      category: categories[1]._id,
      description: "Fresh Organic Ripe bananas",
      image: "../../client/public/images/banana.png",
      price: 4.99,
      quantity: 300,
      user: User[1]._id
    },
    {
      name: "avacado",
      category: categories[1]._id,
      description: "Fresh Organic Avacados",
      image: "../../client/public/images/avacado.png",
      price: 6.99,
      quantity: 190,
      user: User[1]._id
    },
    {
      name: "asparagus",
      category: categories[0]._id,
      description: "fresh organic asparagus",
      image: "../../client/public/images/asparagus.png",
      price: 5.99,
      quantity: 270,
      user: User[0]._id
    },
    {
      name: "mint",
      category: categories[2]._id,
      description: "Bundles of fresh organic mint leaves",
      image: "../../client/public/images/mint.png",
      price: 4.99,
      quantity: 140,
      user: User[1]._id
    },
    {
      name: "rosemary",
      category: categories[2]._id,
      description: "Bundles of fresh organic rosemary twigs",
      image: "../../client/public/images/rosemary.png",
      price: 5.99,
      quantity: 450,
      user: User[1]._id
    },
    {
      name: "lavender",
      category: categories[2]._id,
      description: "Bundles of fresh organic lavender twigs",
      image: "../../client/public/images/lavender.png",
      price: 5.99,
      quantity: 50,
      user: User[1]._id
    },
    {
      name: "thyme",
      category: categories[2]._id,
      description: "Bundles of fresh organic thyme",
      image: "../../client/public/images/thyme.png",
      price: 5.99,
      quantity: 60,
      user: User[1]._id
    },
    {
      name: "bay leafs",
      category: categories[2]._id,
      description: "Bundles of fresh organic bay leaves",
      image: "../../client/public/images/bayLeaf.png",
      price: 3.99,
      quantity: 50,
      user: User[1]._id
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
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Bob",
    lastName: "Belcher",
    gardenAddress: "Bellevue",
    email: "bob@test.com",
    password: "password",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  console.log("User seeded");

  process.exit();
});
