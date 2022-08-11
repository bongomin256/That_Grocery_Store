const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    _id: ID
    name: String
    expirationDate: String
    quantity: Int
    price: Float
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    gardenAddress: String
    email: String
    password: String
    orders: [Order]
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    products: [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      gardenAddress: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      gardenAddress: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
  addProduct(products: [ID]!): Product
`;

module.exports = typeDefs;
