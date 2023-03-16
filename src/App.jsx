// import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import {
  VStack,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import ItemDetail from "./components/Products/ItemDetail";
import Error404 from "./components/Error404/Error404";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Pages/Contact/Contact";
import CartContext from "./components/Context/CartContext";
import useInitialState from "./components/Hooks/UseInitialState";
import { Cart } from "./components/Cart/Cart";

function App() {
  const initialState = useInitialState();
  const bgGradient1 = useColorModeValue(
    "linear(to-r, blackAlpha.400, transparent)"
  );
  const bgGradient2 = useColorModeValue("linear(to-r, grey.100, transparent)");

  return (
    <CartContext.Provider value={initialState}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/productos"
            exact
            element={
              <>
                <VStack
                  w={"full"}
                  justify={"center"}
                  px={useBreakpointValue({ base: 4, md: 4 })}
                  bgGradient={useColorModeValue(bgGradient1, bgGradient2)}
                >
                  <Stack
                    maxW={"auto"}
                    align={"flex-start"}
                    maxH={"auto"}
                    spacing={2}
                  >
                    <Image
                      src={window.location.origin + "/bannerlogo2.png"}
                      alt="Banner Myth Cloth"
                    />
                    <Text
                      color={"white"}
                      fontWeight={700}
                      lineHeight={1.2}
                      fontSize={useBreakpointValue({ base: "2xl", md: "2xl" })}
                    ></Text>
                  </Stack>
                </VStack>

                <ItemListContainer />
              </>
            }
          />
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
          <Route
            exact
            path="category/:id"
            element={
              <>
                <VStack
                  w={"full"}
                  justify={"center"}
                  px={useBreakpointValue({ base: 4, md: 4 })}
                  bgGradient={"linear(to-r, blackAlpha.400, transparent)"}
                >
                  <Stack
                    maxW={"auto"}
                    align={"flex-start"}
                    maxH={"auto"}
                    spacing={2}
                  >
                    <Image
                      src={window.location.origin + "/bannerlogo3.png"}
                      alt="Banner Myth Cloth"
                    />
                    <Text
                      color={"white"}
                      fontWeight={700}
                      lineHeight={1.2}
                      fontSize={useBreakpointValue({ base: "2xl", md: "2xl" })}
                    ></Text>
                  </Stack>
                </VStack>

                <ItemListContainer />
              </>
            }
          />
          <Route
            exact
            path="cart"
            element={
              <>
                <Cart />
              </>
            }
          />
          <Route
            path="/"
            exact
            element={
              <>
                <VStack
                  w={"full"}
                  justify={"center"}
                  px={useBreakpointValue({ base: 4, md: 4 })}
                  bgGradient={"linear(to-r, blackAlpha.400, transparent)"}
                >
                  <Stack
                    maxW={"auto"}
                    align={"flex-start"}
                    maxH={"auto"}
                    spacing={2}
                  >
                    <Image
                      src={window.location.origin + "/bannerlogo.png"}
                      alt="Banner Myth Cloth"
                    />
                    <Text
                      color={"white"}
                      fontWeight={700}
                      lineHeight={1.2}
                      fontSize={useBreakpointValue({ base: "2xl", md: "2xl" })}
                    ></Text>
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
    </CartContext.Provider>
  );
}

export default App;
