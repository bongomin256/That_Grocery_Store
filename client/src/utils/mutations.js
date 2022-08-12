import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        expirationDate
        price
        quantity
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String
    $expirationDate: String
    $quantity: String
    $price: String
  ) {
    addProduct(
      name: $name
      expirationDate: $expirationDate
      quantity: $quantity
      price: $price
    ) {
      name
      expirationDate
      quantity
      price
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $gardenAddress: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      gardenAddress: $gardenAddress
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
