import useStateWithStorage from '../../hooks/useStateWithStorage';
import { useMutation } from '@apollo/client';
import { REMOVE_ALL_ORDER_LINES } from '../../graphql/mutations';
import { Container, Title, Subtitle, Button, Center } from '../../styles';

export function Header() {
  const { subtotal, setSubtotalState } = useStateWithStorage();

  const [removeAllOrderLines] = useMutation(REMOVE_ALL_ORDER_LINES, {
    onCompleted({ removeAllOrderLines: { subTotal } }) {
      setSubtotalState(subTotal);
    },
  });

  return (
    <Container background="dark">
      <Center>
        <Title>Your Order</Title>
        <Subtitle>Subtotal: {subtotal}</Subtitle>
        <Button onClick={() => removeAllOrderLines()}>Clear</Button>
      </Center>
    </Container>
  );
}
