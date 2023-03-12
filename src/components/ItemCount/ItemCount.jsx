import {
    Button,
    Input,
    Flex,
    Divider,
    Center,
    Tag,
    TagLeftIcon,
    TagLabel,
    Stack,
  } from '@chakra-ui/react';
  import { FiShoppingCart } from 'react-icons/fi';
  import { BsPinAngle } from 'react-icons/bs';
  
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
              colorScheme="purple"
              variant="solid"
              size={'sm'}
            >
              Agregar al carro
            </Button>
          </Stack>
          <Divider orientation="vertical" m={2} />
          <Stack direction="row" w="100%">
            <Button colorScheme="pink" size={'sm'} onClick={handleDecrement}>
              -
            </Button>
            <Input
              name="cant"
              value={cant}
              onChange={handleOnChange}
              size={'sm'}
              fontWeight={700}
              textAlign={'center'}
              bgColor={'white'}
              textColor="black"
              readOnly={true}
            />
  
            <Button colorScheme="pink" size={'sm'} onClick={handleIncrement}>
              +
            </Button>
          </Stack>
        </Center>
      </>
    );
  };
  
  export default ItemCount;
  