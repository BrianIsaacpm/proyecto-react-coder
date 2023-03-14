import {
  Heading,
  HStack,
  Text,
  useColorModeValue,
  Box,
  Stack,
  Flex,
  Button,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';
import { CartItem } from '../Cart/CartItem';
import { CartOrderSummary } from '../Cart/CartOrderSumary';

export const Cart = () => {
  const secondaryTextColor = useColorModeValue('white', 'white');
  const bgColor = useColorModeValue(" #497e93", "#aa0505");
  const hoverColor = useColorModeValue(" #1EA8BE", "#D80000");
  const headingCarrito = useColorModeValue("grey","grey.400")
 
 
  const { state, emptyCart, getItemQty } = useContext(CartContext);

  return (
    <Box
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '8', md: '16' }}
      >
        <Stack spacing={{ base: '8', md: '10' }} flex="2">
          <Stack spacing="6">
            {state.cart.length === 0 ? (
              <>
                <Box textAlign="center" py={10} px={6}>
                  <Heading
                    display="inline-block"
                    as="h2"
                    size="2xl"
                    bgGradient="linear(to-r, teal.400, teal.600)"
                    backgroundClip="text"
                  >
                    <Image
                      rounded={'lg'}
                      boxSize="sm"
                      objectFit="cover"
                      h="auto"
                      src={window.location.origin + '/cart-empty.webp'}
                    />
                    UPS!
                  </Heading>
                  <Text fontSize="18px" mt={3} color="white" mb={2}>
                    No tienes productos en el carro
                  </Text>
                  <Text color={'gray.500'} mb={6}>
                    Quizás deberias agregar algunos
                  </Text>
                  <Link to={'/productos'} display={'flex'}>
                    <Button
                      bgGradient="linear(to-r, #7e0a34, #650004, #aa0505)"
                      color="white"
                      variant="solid"
                      _hover={{
                        bg: '#497e93',
                      }}
                    >
                      Ir a cargar productos
                    </Button>
                  </Link>
                </Box>
              </>
            ) : (
              <>
                <Heading fontSize="2xl" fontWeight="extrabold" color={headingCarrito}>
                  Carrito ({getItemQty()} items)
                </Heading>

                {state.cart.map((item, i) => (
                  <CartItem key={item.id} {...item} indexValue={i} />
                ))}
                <Flex direction="column" align="flex-end" flex="1">
                  <HStack mt="6" fontWeight="semibold">
                    <Button 
                    color={secondaryTextColor} 
                    bg={bgColor}
                    _hover={{
                      bg: hoverColor
                    }}
                    variant="solid" 
                    onClick={emptyCart}>
                      Vaciar el carrito
                    </Button>
                  </HStack>
                </Flex>

                <Flex direction="column" align="center" flex="1">
                  <CartOrderSummary />

                  <HStack mt="2" fontWeight="semibold">
                    <p>o</p>
                    <Link to={'/productos'} display={'flex'}>
                      <Button 
                      color={secondaryTextColor}
                      bgColor={bgColor}
                      _hover={{
                        bg: hoverColor
                      }}
                      >Continuar comprando
                      
                      </Button>
                    </Link>
                  </HStack>
                </Flex>
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
