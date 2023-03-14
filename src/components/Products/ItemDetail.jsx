import {
  Flex,
  Container,
  Skeleton,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Stack,
  Text,
  SkeletonText,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FiCheck } from "react-icons/fi";
import { BsFillArrowDownLeftCircleFill } from "react-icons/bs";
import { getProductsById } from "../../firebaseConfig/contextData";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../Context/CartContext";

const ItemDetail = ({ loading }) => {
  const [detail, setDetail] = useState({});
  const [cant, setCant] = useState(1);
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState("");

  const { addToCart, formatPrice } = useContext(CartContext);

  const handleImageClick = (newSize) => {
    setImage(newSize);
    onOpen();
  };

  const onAdd = () => {
    addToCart(detail, cant);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getProductsById(id).then((data) => {
      setDetail(data);
    });
  }, [id]);

  return (
    <Container maxW={"container.md"} pt={6} pb={10}>
      <Box
        p={2}
        display={{ md: "flex" }}
        bg={useColorModeValue("white", "gray.800")}
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Stack direction={{ base: "row", md: "column" }} minW="20%">
          <Skeleton isLoaded={!loading}>
            <Image
              rounded="lg"
              width={{ md: 40, base: 20 }}
              height={{ md: 40, base: 20 }}
              m={2}
              src={detail?.img2}
              onClick={() => handleImageClick(detail.img2)}
            />
          </Skeleton>
          <Skeleton isLoaded={!loading}>
            <Image
              rounded="lg"
              width={{ md: 40, base: 20 }}
              height={{ md: 40, base: 20 }}
              m={2}
              src={detail?.img3}
              onClick={() => handleImageClick(detail.img3)}
            />
          </Skeleton>
          <Skeleton isLoaded={!loading}>
            <Image
              rounded="lg"
              width={{ md: 40, base: 20 }}
              height={{ md: 40, base: 20 }}
              m={2}
              src={detail?.img4}
              onClick={() => handleImageClick(detail.img4)}
            />
          </Skeleton>
          <Skeleton isLoaded={!loading}>
            <Image
              rounded="lg"
              width={{ md: 40, base: 20 }}
              height={{ md: 40, base: 20 }}
              m={2}
              src={detail?.img5}
              onClick={() => handleImageClick(detail.img5)}
            />
          </Skeleton>
        </Stack>

        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Skeleton isLoaded={!loading}>
            <Image
              rounded="lg"
              boxSize="sm"
              width={{ md: "md", base: "md" }}
              height={{ md: "md" }}
              src={detail.img1}
            />
          </Skeleton>
          <Text
            mt={2}
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              NEW
            </Badge>
          </Text>

          <SkeletonText isLoaded={!loading} m={2} />
          {!loading && (
            <Box d="flex">
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="2xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                >
                  {detail.name}
                </Box>
              </Flex>
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="1xl"
                  fontWeight="semibold"
                  as="h2"
                  lineHeight="tight"
                >
                  {detail.description}
                </Box>
              </Flex>
              <Box fontSize="2xl" color={"white"}>
                <Box
                  as="span"
                  color={"red.600"}
                  fontSize="3xl"
                  fontWeight={"bold"}
                >
                 {formatPrice(detail.value)}
                </Box>
                <ItemCount
                  label="Add to cart"
                  stock={detail.stock}
                  initial={1}
                  onAdd={onAdd}
                  cant={cant}
                  setCant={setCant}
                />
                <Stack direction="row" mt={2}>
                  <Button
                    rightIcon={<FiCheck />}
                    w="100%"
                    colorScheme="blue"
                    variant="outline"
                    onClick={() => navigate("/cart")}
                  >
                    Finalizar compra
                  </Button>
                </Stack>
                <Box as="span" ml="4" color="gray.600" fontSize="sm">
                  <Link to={"/"} display={"flex"}>
                    Volver al Inicio
                    <Icon
                      as={BsFillArrowDownLeftCircleFill}
                      h={3}
                      w={3}
                      ml={2}
                      alignSelf={"center"}
                      color="red.600"
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
          )}
          <SkeletonText isLoaded={!loading} m={2} />
        </Box>
      </Box>

      <Modal isCentered onClose={onClose} size="xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={2}>
            <Image
              rounded="lg"
              boxSize="lg"
              height={{ base: "full" }}
              src={image}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default ItemDetail;
