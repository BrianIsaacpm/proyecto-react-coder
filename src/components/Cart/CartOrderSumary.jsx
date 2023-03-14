import { Divider, Flex, Heading, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react';

import { useContext } from 'react';
import CartContext from '../Context/CartContext';
import { Buyer } from '../Buyer/Buyer';

const OrderSummaryItem = ({ item }) => {
  const { formatPrice } = useContext(CartContext);
  return (
    <>
      <Flex justify="flex-end">
        <Text fontWeight="medium">{formatPrice(item.value * item.quantity)}</Text>
      </Flex>
    </>
  );
};

export const CartOrderSummary = () => {
  const { state, formatPrice } = useContext(CartContext);

  return (
    <Stack
      spacing="8"
      borderWidth="1px"
      rounded="lg"
      padding="8"
      bgColor={'gray.900'}
      width="full"
      color="white"
    >
      <Heading size="md">Detalle de la compra</Heading>

      <Stack spacing="6">
        <Text fontWeight="medium" color={mode('gray.100', 'gray.400')}>
          Subtotal
        </Text>

        {state.cart.map((item) => (
          <OrderSummaryItem item={item} key={item.id} />
        ))}
        <Divider orientation="horizontal" />
        <Flex justify="space-between">
          <Text fontSize="2xl" fontWeight="semibold">
            Total
          </Text>

          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(state.total)}
          </Text>
        </Flex>
      </Stack>

      <Stack>
        <Buyer />
      </Stack>
    </Stack>
  );
};
