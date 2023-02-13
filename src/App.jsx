// import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/Products/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route exact path="category/:id" element={<ItemListContainer />} />
        <Route exact path="item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
