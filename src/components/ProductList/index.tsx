import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../../graphql/queries';
import { Product } from '../Product';
import { Product as ProductType } from '../Product/interfaces';
import { Alert, Center, Container, Grid } from '../../styles';

export function ProductList() {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);

  return (
    <Container background="light" style={{ flex: 1 }}>
      {loading ? (
        <Center>
          <Alert>Loading...</Alert>
        </Center>
      ) : error ? (
        <Center>
          <Alert>Error!</Alert>
        </Center>
      ) : data.products.items.length === 0 ? (
        <Center>
          <Alert>No items</Alert>
        </Center>
      ) : (
        <Grid>
          {data.products.items.map((product: ProductType) => (
            <Product product={product} key={product.id} />
          ))}
        </Grid>
      )}
    </Container>
  );
}
