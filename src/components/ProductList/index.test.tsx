import { render, waitFor, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ProductList } from './index';
import { getProductListMock, productMock } from '../../mocks';

describe('ProductList', () => {
  it('render loading', async () => {
    const ProductListComponent = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );

    expect(ProductListComponent.getByText('Loading...')).toBeInTheDocument();
  });
  it('render error', async () => {
    const ProductListComponent = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(ProductListComponent.getByText('Error!')).toBeInTheDocument();
    });
  });
  it('render no items', async () => {
    const ProductListComponent = render(
      <MockedProvider mocks={[getProductListMock()]} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(ProductListComponent.getByText('No items')).toBeInTheDocument();
    });
  });
  it('render items and buy button', async () => {
    const ProductListComponent = render(
      <MockedProvider
        mocks={[getProductListMock(productMock)]}
        addTypename={false}
      >
        <ProductList />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(
        ProductListComponent.getByText(productMock.name)
      ).toBeInTheDocument();
      expect(ProductListComponent.getByText('Buy')).toBeInTheDocument();
    });
  });
});
