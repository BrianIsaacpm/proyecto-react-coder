import { Link } from 'react-router-dom';
import { Box, Heading, Text, Button, Image, useColorModeValue } from '@chakra-ui/react';

export default function Error404() {
  return (
    <Box textAlign="center" py={5} px={9}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgColor={useColorModeValue("#aa0505", "#808B96")}
        backgroundClip="text"
        p={4}
      >
        <Image
          rounded={'lg'}
          boxSize="sm"
          objectFit="cover"
          w="full"
          h="auto"
          src={window.location.origin + '/notfound.gif'}
        />
        Ups ! Pagina no encontrada
      </Heading>
      <Text 
      color={useColorModeValue("#7B241C", "#808B96 ")}
      mb={6}>
        La pagina que intentas acceder no existe.
      </Text>
      <Link to={'/'} display={'flex'}>
        <Button
          color={useColorModeValue("white", "white")}
          bgColor={useColorModeValue("#aa0505", "#1F618D")}
          variant="solid"
          _hover={{ bg: useColorModeValue("#7B241C  ", "#496e93") }}
        >
          Volver al Home
        </Button>
      </Link>
    </Box>
  );
}
