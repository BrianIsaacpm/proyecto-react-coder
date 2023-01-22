import { Box, Image, Badge} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";

function Card() {
  const property = {
    imageUrl: "https://cdn.shopify.com/s/files/1/0579/0878/9435/products/Rada_2_800x.jpg?v=1642433956",
    imageAlt: "Rear view of modern home with pool",
    stock: 9,
    reservas: 2,
    title: "Saint Seiya Wyvern Radamanthys OCE Myth Cloth Ex de Bandai",
    formattedPrice: "$199.000",
    visitas: 34,
    rating: 4,
  };

  return (
    <Box m="2" mt="5" maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

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
            {property.stock} stock &bull; {property.reservas} reservas
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / CLP
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.visitas} visitas
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card;