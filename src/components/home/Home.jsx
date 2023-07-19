import './Home.css';
import { HiArrowRight } from 'react-icons/hi';
import { PiTruckFill } from 'react-icons/pi';
import { BiLike } from 'react-icons/bi';
import { MdPayments } from 'react-icons/md';
import { BsCurrencyExchange } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';                              
import { useNavigate } from 'react-router-dom';
                                
const Home = ({newProduct, setIsCloseView, setProducted, cart, setCart}) => {

    const navigate = useNavigate();
    const openViewHandle = ( p ) => {
        setIsCloseView(false);
        setProducted(p);
    }

    const cartHandle = (addProduct) => {
        console.log("cart: ", cart);
        const isProductInCart = cart.find( p => p.id === addProduct.id);

        if(isProductInCart) 
            return alert("This product already exists in the cart!!!");
        else {
            setCart([...cart, {...addProduct, quantity: 1}]);
            alert("This product has been add to cart!!!");
        }
    }

    return ( 
        <>
        <div className="home">
            {/* Banner */}
            <div className="home-banner">
                <img src="./img/top-banner.png" alt="Banner" />
                <div className="home-btn">
                    <button className='btn banner-btn'> 
                        <p onClick={ () => navigate('/product') }>Buy now</p>
                        <HiArrowRight />
                    </button>
                </div>      
            </div>
            {/* Services */}
            <div className="services">
                <div className="service">
                    <PiTruckFill  className='serc-icon'/>
                    <p className='serc-text'>
                        Nationwide shipping <br/>Payment upon receipt
                    </p>
                </div>
                <div className="service">
                    <BiLike className='serc-icon'/>
                    <p className='serc-text'>
                        Quality assurance <br/> Product quality assurance
                    </p>
                </div>
                <div className="service">
                    <MdPayments className='serc-icon'/>
                    <p className='serc-text'>
                        Proceed with payment <br/> Multuple payment methods
                    </p>
                </div>
                <div className="service">
                    <BsCurrencyExchange className='serc-icon'/>
                    <p className='serc-text'>
                        Change new product <br/> Defective product
                    </p>
                </div>
            </div>
            <div className="product-underline"></div>
            {/* Product */}
            <div className="new-product">
                <div className="product-title">
                    <p>New product</p>
                </div>
                <div className="product-types">
                    <div className="product-type btn">All</div>
                    <div className="product-type btn">Sports shoes</div>
                    <div className="product-type btn">Badminton rackets</div>
                    <div className="product-type btn">Sports shirt</div>
                    <div className="product-type btn">Sports pants</div>
                </div>
                <div className="products">
                    {
                        newProduct.map( p => {
                            return(
                                <div className="product" key={p.id} >
                                    <div className="product-item-box">
                                        <div className="items-box">
                                            <AiOutlineShoppingCart className='item-box' onClick={() => cartHandle(p)} />
                                            < AiOutlineEye className='item-box' onClick={ () => openViewHandle(p) }/>
                                            <AiOutlineHeart className='item-box'/>
                                        </div>
                                    </div>
                                    <div className="product-img">
                                        <img src={p.image} alt="Product" />
                                    </div>
                                    <p className='product-name'>{p.name}</p>
                                    <p className="product-price">{p.price}$</p>
                                </div>
                            )
                        })
                        
                    }
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Home;