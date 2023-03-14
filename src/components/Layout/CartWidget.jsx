import { BsCart3 } from 'react-icons/bs';
import { Badge, Text, Box, Flex } from '@chakra-ui/react';
import { useContext } from 'react';

import CartContext from './../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getItemQty } = useContext(CartContext);

  return (
    <>
      <Link to={'/cart'}>
        <Flex mr="10">
            <>
              <BsCart3 size={40} color="white" m={2} />
              <Box>
                <Text fontWeight="bold">
                  <Badge 
                  ml="1" 
                  fontSize="1.3em"
                  m={2} 
                  colorScheme="red" 
                  >
                    {getItemQty()}
                  </Badge>
                </Text>
              </Box>
            </>
        </Flex>
      </Link>
    </>
  );
};

export default CartWidget;
