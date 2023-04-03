import { gql } from '@apollo/client';

const ORDER_FRAGMENT = gql`
  fragment OrderFragment on Order {
    subTotal
  }
`;

export const ADD_ITEM_TO_ORDER = gql`
  mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ...OrderFragment
    }
  }

  ${ORDER_FRAGMENT}
`;

export const REMOVE_ALL_ORDER_LINES = gql`
  mutation removeAllOrderLines {
    removeAllOrderLines {
      ...OrderFragment
    }
  }

  ${ORDER_FRAGMENT}
`;
