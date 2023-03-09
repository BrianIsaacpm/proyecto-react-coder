import { Link } from 'react-router-dom';
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';

export default function Error404() {
  return (
    <Box textAlign="center" py={5} px={9}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, #7e0a34, #aa0505)"
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
      <Text color={'#aa0505'} mb={6}>
        La pagina que intentas acceder no existe.
      </Text>
      <Link to={'/'} display={'flex'}>
        <Button
          bgGradient="linear(to-r, #7e0a34, #650004, #aa0505)"
          color="white"
          variant="solid"
          _hover={{
            bg: '#497e93',
          }}
        >
          Volver al Home
        </Button>
      </Link>
    </Box>
  );
}
