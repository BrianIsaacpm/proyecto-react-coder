// import Navbar from "./components/Navbar";
import NavBar from "./components/Layout/NavBar";
import Card from "./components/Card";
import {Container, SimpleGrid, Center, Box} from "@chakra-ui/react";
import ItemListContainer from "./components/Layout/ItemListContainer";


function App() {
  return (
    <>
      <NavBar/>
      <Container maxW='100%'>
      <Center>
          <Box mt='3'>
            <ItemListContainer greeting="LISTA DE PRODUCTOS" />
          </Box>
      </Center>
      <SimpleGrid columns={[1, 4, 1, 4]}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </SimpleGrid>
      </Container>  
    </>
  );
}

export default App;
