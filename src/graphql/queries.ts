import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
  query getAllProducts {
    products {
      items {
        id
        name
        description
        featuredAsset {
          name
          source
        }
        variants {
          id
          price
          currencyCode
        }
      }
    }
  }
`;
