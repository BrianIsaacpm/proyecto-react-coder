import { SimpleGrid, Container } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getProducts } from "../../firebaseConfig/contextData";
import { useParams } from "react-router-dom";

import Card from "../Card";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getProducts().then((data) => {
      if (id) {
        const results = data.filter((data) => data.category === id);
        setProducts(results);
      } else {
        setProducts(data);
      }
     
     
    });
  }, [id]);

  // const results = !search
  // ? useData
  // : useData

  return (
    <>
      <Container maxW={"container.xl"} pt={2}>
        <SimpleGrid columns={[2, 2, 3, 4]} mt={4}>
          {products.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
