import {
  SimpleGrid,
  Box,
  Flex,
  Container,
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import ItemList from './ItemList';
import { getProducts, getProductsBycategoryId } from '../../firebaseConfig/contextData'
import { useParams } from 'react-router-dom';
import { Skeleton, Heading } from '@chakra-ui/react';

export default function ItemListContainer() {
  const { id } = useParams();
  const [useData, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    if (!id) {
      //obtiene la totalidad de los productos
      (async () => {
        const data = await getProducts();
        setData(data);
        setLoading(false);
      })();
    } else {
      //se ejecuta solo si no tiene una categoria seleccionada
      (async () => {
        const data = await getProductsBycategoryId(id);

        setData(data);
        setLoading(false);
      })();
    }
  }, [id]);

  const results = !search
    ? useData
    : useData.filter(
        (data) =>
          data.name.toString().toLowerCase().includes(search.toLowerCase()) ||
          data.category.toString().toLowerCase().includes(search.toLowerCase())
      );

  const handleSearcher = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Container maxW={'container.xl'} pt={2}>
        <InputGroup 
        display="block" 
        margin={{ lg: '0 auto' }} 
        w={{ lg: '50vw' }} 
        m={2}
        borderRadius={5}
        color={useColorModeValue("white", "#2C3E50")}
        bgColor={useColorModeValue("grey.100", "white")}
        _hover={{ bg: useColorModeValue("grey.100", "#E5E8E8  ") }}
        
        >

          <InputLeftElement 
          pointerEvents="none" id="searchIcon" color={"#2C3E50"}>
            <BiSearch />
          </InputLeftElement>
          <Input
            data-test-id="search-input"
            pl={10}
            variant="filled"
            placeholder="¿Qué producto buscas?"
            value={search}
            fontWeight="medium"
            color={useColorModeValue("grey","grey.300")}
            focusBorderColor="gray.600"
            _placeholder={{opacity: 1, color: 'gray.600' }}
            onChange={handleSearcher}
          />
        </InputGroup>
        <SimpleGrid columns={[2, 2, 3, 4]} mt={4}>
          <ItemList item={results} />
        </SimpleGrid>
        {!loading && !results.length && (
          <Flex align={'center'} justify={'center'} mt={4}>
            <Heading
              as={'h2'}
              fontSize={{ base: 'xl', sm: '2xl' }}
              textAlign={'center'}
              mb={5}
              color={'gray'}
            >
              Lo sentimos no encontramos resultados para tu busqueda! 😢
            </Heading>
          </Flex>
        )}

        {loading && (
          <SimpleGrid columns={[2, 2, 3, 4]}>
            {Array(10)
              .fill('')
              .map((_, i) => {
                return (
                  <Skeleton m={4} minH="sm" key={i}>
                    <Flex p={4} w="full" alignItems="center" justifyContent="center">
                      <Box
                        maxW="sm"
                        borderWidth="1px"
                        rounded="lg"
                        shadow="lg"
                        position="relative"
                      ></Box>
                    </Flex>
                  </Skeleton>
                );
              })}
          </SimpleGrid>
        )}
      </Container>
    </>
  );
}

