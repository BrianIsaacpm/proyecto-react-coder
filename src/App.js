// import Navbar from "./components/Navbar";
import NavBar from "./components/Layout/NavBar";
import Card from "./components/Card";
import {Container, SimpleGrid} from "@chakra-ui/react";


function App() {
  return (
    <>
      <NavBar/>
      <Container maxW='100%'>
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
