import {
  Button,
  Input,
  Flex,
  Divider,
  Center,
  Tag,
  TagLeftIcon,
  useColorModeValue,
  TagLabel,
  Stack,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { BsPinAngle } from "react-icons/bs";

const ItemCount = ({ stock, onAdd, cant, setCant }) => {
  const handleOnChange = (e) => {
    setCant(parseInt(e.target.value, 10));
  };

  const handleIncrement = () => {
    if (cant < stock) setCant((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (cant > 0) setCant((prevCount) => prevCount - 1);
  };

  return (
    <>
      <Flex>
        <Tag size="sm" key="sm" variant="solid" colorScheme="cyan">
          <TagLeftIcon boxSize="12px" as={BsPinAngle} />
          <TagLabel>{stock} Disponibles</TagLabel>
        </Tag>
      </Flex>
      <Center height="50px">
        <Stack direction="row" w="100%">
          <Button
            leftIcon={<FiShoppingCart />}
            onClick={() => {
              onAdd();
            }}
            color={useColorModeValue("white", "white")}
            bgColor={useColorModeValue("#D80000", "#1EA8BE")}
            _hover={{ bg: useColorModeValue("#aa0505", "#497e93") }}
            variant="solid"
            size={"sm"}
          >
            Agregar al carro
          </Button>
        </Stack>
        <Divider orientation="vertical" m={2} />
        <Stack direction="row" w="100%">
          <Button
            color={useColorModeValue("white", "white")}
            bgColor={useColorModeValue("#D80000", "#1EA8BE")}
            _hover={{ bg: useColorModeValue("#aa0505", "#497e93") }}
            size={"sm"}
            onClick={handleDecrement}
          >
            -
          </Button>
          <Input
            name="cant"
            value={cant}
            onChange={handleOnChange}
            size={"sm"}
            fontWeight={700}
            textAlign={"center"}
            bgColor={"white"}
            textColor="black"
            readOnly={true}
          />

          <Button
            color={useColorModeValue("white", "white")}
            bgColor={useColorModeValue("#D80000", "#1EA8BE")}
            _hover={{ bg: useColorModeValue("#aa0505", "#497e93") }}
            size={"sm"}
            onClick={handleIncrement}
          >
            +
          </Button>
        </Stack>
      </Center>
    </>
  );
};

export default ItemCount;
