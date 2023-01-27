import React from "react";

import { Box, Badge, HStack } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

const CartWidget = () => {
  return (
    <>
      <HStack spacing="2px" mr='2'>
        <Box>
          <FiShoppingCart size='30'/>
        </Box>
        <Box>
          <Badge mb='5'>0</Badge>
        </Box>
      </HStack>
    </>
  );
};

export default CartWidget;
