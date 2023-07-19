import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Product from "../product/Product";
import { useState } from "react";
import View from "../view/View";
import Cart from "../cart/Cart";


const Rout = ({products, search, cateSelected, setCateSelected, cart, setCart}) => {

    const [isCloseView, setIsCloseView] = useState(false);
    const [producted, setProducted] = useState (undefined);
    const newProduct = products.find( product => product.type === 'new-products').data;

    return ( 
        <>
            <Routes>
                <Route path="/" element={<Home newProduct={newProduct} setIsCloseView={setIsCloseView} setProducted={setProducted} cart={cart} setCart={setCart} />}/>
                <Route path="/product" element={<Product products={products} search={search} setIsCloseView={setIsCloseView} setProducted={setProducted} cateSelected={cateSelected} setCateSelected={setCateSelected} cart={cart} setCart={setCart} />}/>
                <Route path="/about" element={null}/>
                <Route path="/contact" element={null}/>
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            </Routes>
                <View product={producted} isCloseView={isCloseView} setIsCloseView={setIsCloseView}/>
        </>
     );
}
 
export default Rout;