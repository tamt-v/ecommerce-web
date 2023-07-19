import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Rout from "./components/rout/Rout";
import Footer from "./components/footer/Footer";
import Products from "./products";
import { useState } from "react";

function App() {
  const products = Products;
  const [search, setSearch] = useState("");
  const [cateSelected, setCateSelected] = useState(search || "shoes");
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Nav />
      <Header
        search={search}
        setSearch={setSearch}
        setCateSelected={setCateSelected}
      />
      <Rout
        products={products}
        search={search}
        cateSelected={cateSelected}
        setCateSelected={setCateSelected}
        cart={cart}
        setCart={setCart}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
