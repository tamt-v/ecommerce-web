import { AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import './Product.css';

const Product = ({products, setIsCloseView, setProducted, cateSelected, setCateSelected, cart, setCart }) => {
    const productsFilter = products.find(p => {
        if (p.type === cateSelected) 
            return p.data;
        return undefined;
    });

    const openViewHandle = ( p ) => {
        setIsCloseView(false);
        setProducted(p);
    }

    const cartHandle = (addProduct) => {
        const isProductInCart = cart.find( p => p.id === addProduct.id);

        if(isProductInCart) 
            return alert("This product already exists in the cart!!!");
        else {
            setCart([...cart, {...addProduct, quantity: 1}]);
            alert("This product has been add to cart!!!");
        }
    }

    return ( 
        <div className="product-container">
            <div id="con-left">
                <h3>CATEGORIES</h3>
                <ul className="categories">
                    <li className="category btn" onClick={ () => setCateSelected("shoes")}>Sports shoes</li>
                    <li className="category btn" onClick={ () => setCateSelected("rackets")}>Badminton rackets</li>
                    <li className="category btn" onClick={ () => setCateSelected("shirt")}>Sports shirt</li>
                    <li className="category btn" onClick={ () => setCateSelected("pants")}>Sports pants</li>
                </ul>
            </div>
            <div id="con-right">
                <>{
                    productsFilter 
                    ? (
                        productsFilter.data.map( (p, key) => {
                            return (
                                <div className="item" key={key} >
                                    <div className="product-item-box">
                                        <div className="items-box">
                                            <AiOutlineShoppingCart className='item-box' onClick={() => cartHandle(p)}/>
                                            <AiOutlineEye className='item-box' onClick={ () => openViewHandle(p) }/>
                                            <AiOutlineHeart className='item-box'/>
                                        </div>
                                    </div>
                                    <div className="product-img">
                                        <img src={p.image} alt="" />
                                    </div>
                                    <p className='product-name'>{p.name}</p>
                                    <p className="product-price">{p.price}$</p>
                                </div>
                            )
                            
                        })
                    ):  (
                        (<h3>This product type could not be found!!!</h3>)
                    )
                }</>
            </div>
        </div>
     );
}
 
export default Product;