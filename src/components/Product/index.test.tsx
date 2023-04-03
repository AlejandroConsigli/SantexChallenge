import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Product } from './index';
import { productMock } from '../../mocks';
import { addItemToOrderMock } from '../../mocks';

describe('Product', () => {
  it('render items and buy button', async () => {
    const ProductComponent = render(
      <MockedProvider mocks={[addItemToOrderMock]} addTypename={false}>
        <Product product={productMock} />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(ProductComponent.getByText(productMock.name)).toBeInTheDocument();
      expect(ProductComponent.getByText('Buy')).toBeInTheDocument();
    });
  });
  it('render mock image', async () => {
    const ProductComponent = render(
      <MockedProvider mocks={[addItemToOrderMock]} addTypename={false}>
        <Product product={productMock} />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(
        ProductComponent.getByAltText('derick-david-409858-unsplash.jpg')
      ).toBeInTheDocument();
    });
  });
  it('render default image', async () => {
    delete productMock.featuredAsset;
    const ProductComponent = render(
      <MockedProvider mocks={[addItemToOrderMock]} addTypename={false}>
        <Product product={productMock} />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(
        ProductComponent.getByAltText('Default image')
      ).toBeInTheDocument();
    });
  });
});
