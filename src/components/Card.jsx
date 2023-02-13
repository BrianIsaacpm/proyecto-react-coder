import { Box, Image, Badge } from "@chakra-ui/react";
import { Link as RouteLink } from 'react-router-dom';

function Card({ item }) {
  debugger;

  return (
    <Box
      m="2"
      mt="5"
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
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

      <Box m="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {item.stock} stock &bull; {item.category}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          // noOfLines={1}
        >
          {item.name}
        </Box>

        <Box>
          ${item.value}
          <Box as="span" color="gray.600" fontSize="sm">
            / CLP
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
