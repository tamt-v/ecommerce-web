import { AiOutlineCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import './Cart.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const Cart = ( {cart, setCart} ) => {
    const navigate = useNavigate();

    const exsitProduct = ( p ) => {
        return cart.find( c => c.id === p.id);
    }
    const inQuantityHandle = ( p ) => {
        const exitP = exsitProduct(p);
        setCart(cart.map( c => c.id === exitP.id ? {...exitP, quantity: exitP.quantity + 1} : c))
    }
    const deQuantityHandle = ( p ) => {
        const exitP = exsitProduct(p);
        setCart(cart.map( c => c.id === exitP.id ? c.quantity === 1 ? removeProduct(p) : {...exitP, quantity: exitP.quantity - 1} : c))
    }
    const removeProduct = ( p ) => {
        const exitP = exsitProduct(p);
        setCart(cart.filter( c => c.id !== exitP.id))
    }

    //total quantity
    let numQttPro = [];
    let numPricePro = [];
    cart.map( p => {
        numQttPro.push(p.quantity);
        numPricePro.push(p.quantity * p.price);
    })
    const totalQuantity = numQttPro.reduce( (add, step) => add + step, 0 )
    //total price
    const totalPrice = numPricePro.reduce( (add, step) => add + step, 0 )

    //payment
    const paymentHandle = () => {
        setCart([])
    }

    return ( 
        <>
            <p className="cart-nav">Home <MdKeyboardArrowRight /> <span className="cart-nav-hl">Cart</span></p>

            {
                cart.length === 0 ? (
                    <div className='cart-empty'>
                        <p className='cart-empty-txt'>CART IS EMPTY</p>
                        <button className='btn btn-show-now' onClick={ () => navigate('/product') }>Shop now</button>
                    </div>
                ) : (
                <div className="cart">
                    <div className="cart-left">
                        {
                            cart.map( p => {
                                return(
                                    <div className="cart-product">
                                            <AiOutlineCloseCircle className='cart-close btn' onClick={ () => removeProduct(p)}/>
                                            <cart className="cart-img">
                                                <img src={p.image} alt="Product" />
                                            </cart>
                                            <div className="cart-content">
                                                <h3 className="cart-name">{p.name}</h3>
                                                <p className="cart-price">${p.price}</p>
                                                <div className="cart-quantity">
                                                    <button><AiOutlineMinusCircle onClick={ () => deQuantityHandle(p) }/></button>
                                                    <input type="text" value={p.quantity} className='quantity-inp'/>
                                                    <button><AiOutlinePlusCircle onClick={ () => inQuantityHandle(p) }/></button>
                                                </div>
                                                <p className="product-total">Total: ${p.quantity * p.price}</p>
                                            </div>
                                        </div>
                                    
                                    )
                                })
                        }
                    </div>
                    <div className="cart-right">
                        <p className="cart-descript">Total number of products selected is <span>{totalQuantity}</span></p>
                        <p className="cart-total-price">Total: <span>${totalPrice}</span></p>
                        <div className="cart-payment">
                            <button className='btn payment-btn' onClick={paymentHandle}>Payment</button>
                        </div>
                    </div>
                </div>
                )    
            }
        </>
     );
}
 
export default Cart;