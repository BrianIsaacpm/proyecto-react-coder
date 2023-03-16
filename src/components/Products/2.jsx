

//   import { SimpleGrid, Container } from "@chakra-ui/react";
//   import { useState, useEffect } from "react";
//   import { getProducts } from "../../firebaseConfig/contextData";
//   import { useParams } from "react-router-dom";
  
//   import Item from "./Item";
  
//   export default function ItemListContainer() {
//     const [products, setProducts] = useState([]);
  
//     const { id } = useParams();
  
//     useEffect(() => {
//       getProducts().then((data) => {
//         if (id) {
//           const results = data.filter((data) => data.category === id);
//           setProducts(results);
//         } else {
//           setProducts(data);
//         }
       
       
//       });
//     }, [id]);
  
  
//     return (
//       <>
//         <Container maxW={"container.xl"} pt={2}>
//           <SimpleGrid columns={[2, 2, 3, 4]} mt={4}>
//             {products.map((item) => (
//               <Item key={item.id} item={item} />
//             ))}
//           </SimpleGrid>
//         </Container>
//       </>
//     );
//   }
  