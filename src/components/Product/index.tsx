import { useMutation } from '@apollo/client';
import { Product as ProductType } from './interfaces';
import { ADD_ITEM_TO_ORDER } from '../../graphql/mutations';
import useStateWithStorage from '../../hooks/useStateWithStorage';
import { Box, Button, Card, Foot, Image, Text } from '../../styles';
import defaultImage from '../../assets/default_image.png';

export function Product({ product }: { product: ProductType }) {
  const { setSubtotalState } = useStateWithStorage();
  const { name, description, variants, featuredAsset } = product;
  const firstVariant = variants[0];

  const [addItemToOrder] = useMutation(ADD_ITEM_TO_ORDER, {
    onCompleted({ addItemToOrder: { subTotal } }) {
      setSubtotalState(subTotal);
    },
  });

  const handleAddItemToOrder = () => {
    addItemToOrder({
      variables: { productVariantId: firstVariant.id, quantity: 1 },
    });
  };

  return (
    <Card>
      {featuredAsset?.source ? (
        <Image src={featuredAsset.source} alt={featuredAsset.name} />
      ) : (
        <Image src={defaultImage} alt="Default image" />
      )}
      <Box>
        <Text size="1.5em">{name}</Text>
        <Text size="0.8em">{description}</Text>
        <Foot>
          <Text size="1.5em">
            {firstVariant.price}&nbsp;
            {firstVariant.currencyCode}
          </Text>
          <Button onClick={handleAddItemToOrder}>Buy</Button>
        </Foot>
      </Box>
    </Card>
  );
}
