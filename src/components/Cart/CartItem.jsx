import React from "react";
import {
  HStack,
  Image,
  Text,
  Box,
  Stack,
  useColorModeValue,
  Flex,
  Button,
  CloseButton,
  Badge,
  Input,
} from "@chakra-ui/react";

import { useContext } from "react";
import CartContext from "../Context/CartContext";

export const CartItem = (props) => {
  const { formatPrice, removeFromCart } = useContext(CartContext);

  const { name, quantity, img1, value, category } = props;

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          objectFit={"cover"}
          boxSize={"140px"}
          src={img1}
          alt={name}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text
              fontWeight="medium"
              color={useColorModeValue("black", "gray.300")}
            >
              {name}
            </Text>

            <Text
              color={useColorModeValue("black", "white")}
              fontSize="sm"
              as="u"
            >
              {category.toUpperCase()}
            </Text>
          </Stack>
        </Box>
      </Stack>

      {/* Desktop */}
      <Flex
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <HStack spacing="8">
          <Text
            as="span"
            fontWeight="medium"
            color={useColorModeValue("black", "gray.400")}
            textDecoration={"none"}
          >
            Cantidad
          </Text>
          <Input
            name="cant"
            value={quantity}
            size={"sm"}
            fontWeight={700}
            maxW={"100%"}
            textAlign={"center"}
            textColor={useColorModeValue("#D80000", "white")}
            readOnly={true}
          />
          <Text
            as="span"
            fontWeight="medium"
            color={useColorModeValue("#D80000", "white")}
            textDecoration={"none"}
          >
            {formatPrice(value)}
          </Text>

          <CloseButton
            aria-label={`Delete ${name} from cart`}
            color={useColorModeValue("#D80000", "white")}
            onClick={() => removeFromCart(props)}
          />
        </HStack>
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Button
          fontSize="sm"
          color={useColorModeValue("white", "white")}
          bgColor={useColorModeValue("#aa0505", "#497e93")}
          _hover={{ bg: useColorModeValue("#D80000", "#1EA8BE") }}
          textDecor="none"
          onClick={() => removeFromCart(props)}
        >
          Eliminar
        </Button>

        <HStack spacing="6">
          <Text
            as="span"
            fontWeight="medium"
            color={useColorModeValue("black", "gray.400")}
            textDecoration={"none"}
          >
            Cantidad: <Badge textColor={useColorModeValue("#D80000", "white")}> {quantity}</Badge>
          </Text>
          <Text
            as="span"
            fontWeight="medium"
            color={useColorModeValue("#D80000", "white")}
            textDecoration={"none"}
          >
            {formatPrice(value)}
          </Text>
        </HStack>
      </Flex>
    </Flex>
  );
};
