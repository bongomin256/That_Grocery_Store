import { gql } from "@apollo/client";

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      expirationDate
      description
      quantity
      price
      image
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      gardenAddress
      email
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          expirationDate
          quantity
          price
        }
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(product: $products) {
      session
    }
  }
`;
