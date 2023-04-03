import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Wrapper } from './styles';
import { ContextProvider } from './context/Provider';

describe('App', () => {
  it('render title', async () => {
    const AppComponent = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ContextProvider>
          <Wrapper>
            <Header />
            <ProductList />
          </Wrapper>
        </ContextProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(AppComponent.getByText('Your Order')).toBeInTheDocument();
    });
  });
});
