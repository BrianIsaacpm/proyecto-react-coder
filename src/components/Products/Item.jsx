import {
  Box,
  Button,
  Stack,
  Image,
  Badge,
  Text,
  Flex,
  useColorModeValue,
  TagLeftIcon,
  TagLabel,
  Tag,
  Icon,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import { BsPinAngle, BsEyeFill } from "react-icons/bs";
import CartContext from "./../Context/CartContext";
import { useContext } from "react";

function Item({ item }) {
  const { formatPrice } = useContext(CartContext);

  return (
    <Box
      display={{ md: "flex" }}
      bg={useColorModeValue("#EBEDEF", "gray.700")}
      color={useColorModeValue("white", "gray.900")}
      m={2}
      p={0.5}
      rounded="md"
      boxShadow="xs"
    >
      <Box mt={{ base: 0, md: 0 }}>
        <RouteLink to={"/item/" + item.id} display={"flex"}>
          <Image
            src={item.img1}
            alt={`Picture of ${item.img1}`}
            minWidth={"100%"}
            objectFit="cover"
            boxSize="auto"
            minH={{ sm: "sm", md: "sm", xl: "sm" }}
            maxH={{ base: "sm", sm: "xl", md: "sm", xl: "xl" }}
            position="relative"
            borderRadius="lg"
          />
        </RouteLink>

        <Box mt={{ base: 2, md: 2 }}>
          <Box display="flex" alignItems="baseline">
            <Badge
              rounded="full"
              px="2"
              ml="2"
              mr="2"
              fontSize={{ base: "0.5em", md: "sm", xl: "sm" }}
              colorScheme="red"
            >
              NEW
            </Badge>
            <Flex>
              <Tag size="sm" key="sm" variant="solid" colorScheme="cyan">
                <TagLeftIcon boxSize="12px" as={BsPinAngle} />
                <TagLabel>{item.stock} Disponibles</TagLabel>
              </Tag>
            </Flex>
          </Box>

          <Box
            m={{ base: 2, md: 2 }}
            minH={{ sm: "12em", md: "12em" }}
            maxH={{ sm: "sm", md: "md" }}
          >
            <Text
              fontWeight="bold"
              textTransform="uppercase"
              fontSize={{ base: "0.8em", md: "sm", xl: "xl" }}
              letterSpacing="wider"
              color={useColorModeValue("black", "white")}
            >
              {item.name}
            </Text>
            <Text
              color={"red.600"}
              fontWeight={"bold"}
              fontSize={{ base: "xl", xl: "2xl" }}
            >
              {formatPrice(item.value)}
            </Text>
          </Box>

          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <RouteLink to={"/item/" + item.id}>
              <Button
                fontSize={{ base: "sm", md: "sm" }}
                w={"full"}
                position="sticky"
                color={useColorModeValue("white", "white")}
                bg={useColorModeValue("#356098", "gray.900")}
                rounded={"md"}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                <Icon
                  as={BsEyeFill}
                  w={8}
                  pr={2}
                  color={useColorModeValue("white", "red.600")}
                />
                Ver detalle
              </Button>
            </RouteLink>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Item;
