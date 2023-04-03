import {
  REMOVE_ALL_ORDER_LINES,
  ADD_ITEM_TO_ORDER,
} from '../graphql/mutations';
import { GET_ALL_PRODUCTS } from '../graphql/queries';
import { Product as ProductType } from '../components/Product/interfaces';

export const removeAllOrderLinesMock = {
  request: {
    query: REMOVE_ALL_ORDER_LINES,
  },
  result: {
    data: {
      removeAllOrderLines: {
        subTotal: 0,
      },
    },
  },
};

export const addItemToOrderMock = {
  request: {
    query: ADD_ITEM_TO_ORDER,
  },
  result: {
    data: {
      addItemToOrder: {
        subTotal: 20000,
      },
    },
  },
};

export const productMock: ProductType = {
  id: '1',
  name: 'Laptop',
  description:
    'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
  featuredAsset: {
    name: 'derick-david-409858-unsplash.jpg',
    source:
      'https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg',
  },
  variants: [
    {
      id: '1',
      price: 129900,
      currencyCode: 'RON',
    },
    {
      id: '2',
      price: 139900,
      currencyCode: 'RON',
    },
    {
      id: '3',
      price: 219900,
      currencyCode: 'RON',
    },
    {
      id: '4',
      price: 229900,
      currencyCode: 'RON',
    },
  ],
};

export const getProductListMock = (productMock?: ProductType) => ({
  request: {
    query: GET_ALL_PRODUCTS,
  },
  result: {
    data: {
      products: {
        items: productMock ? [productMock] : [],
      },
    },
  },
});
