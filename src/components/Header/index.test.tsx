import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Header } from './index';
import { removeAllOrderLinesMock } from '../../mocks';

describe('Header', () => {
  it('render text and button', async () => {
    const HeaderComponent = render(
      <MockedProvider mocks={[removeAllOrderLinesMock]} addTypename={false}>
        <Header />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(HeaderComponent.getByText('Subtotal:')).toBeInTheDocument();
      expect(HeaderComponent.getByText('Clear')).toBeInTheDocument();
    });
  });
});
