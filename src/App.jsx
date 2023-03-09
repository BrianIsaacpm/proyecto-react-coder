// import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import {
  VStack,
  Stack,
  Text,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import ItemDetail from "./components/Products/ItemDetail";
import Error404 from "./components/Error404/Error404";
import Footer from "./components/Footer/Footer";
import Contact from './components/Pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/productos" element={<ItemListContainer />} />
         <Route
              exact
              path="contacto"
              element={
                <>
                  <Contact />
                </>
              }
            /> 
        <Route exact path="item/:id" element={<ItemDetail />} />
        <Route exact path="category/:id" element={<ItemListContainer />} />
        {/* <Route
              exact
              path="cart"
              element={
                <>
                  <Cart />
                </>
              }
            /> */}
        <Route
          path="/"
          exact
          element={
            <>
              <VStack
                w={"full"}
                justify={"center"}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
               >
                <Stack
                  maxW={"auto"}
                  align={"flex-start"}
                  maxH={"auto"}
                  spacing={2}
                >
                  <Image
                    src={window.location.origin + "/bannerlogo.png"}
                    alt="Dan Abramov"
                  />
                  <Text
                    color={"white"}
                    fontWeight={700}
                    lineHeight={1.2}
                    fontSize={useBreakpointValue({ base: "2xl", md: "2xl" })}
                  >
                    {/* Nuevos productos */}
                  </Text>
                </Stack>
              </VStack>

              <ItemListContainer />
            </>
          }
        />

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


