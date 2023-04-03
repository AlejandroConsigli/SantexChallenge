import { ContextProvider } from './context/Provider';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Wrapper } from "./styles";

function App() {
  return (
    <ContextProvider>
      <Wrapper>
        <Header />
        <ProductList />
      </Wrapper>
    </ContextProvider>
  );
}

export default App;
