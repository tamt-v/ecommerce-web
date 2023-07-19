import { AiOutlineCloseCircle } from 'react-icons/ai';
import './View.css';

const View = ({product, isCloseView, setIsCloseView}) => {
    return ( 
        <>
        {
            product && (isCloseView 
            ? null
            : (
                <div className='view'>
                    <div className="view-tab">
                        <AiOutlineCloseCircle className='close-icon btn'  onClick={ () => setIsCloseView(true)}/>
                        <div className="view-image">
                            <div className="view-img">
                                <img src={product.image} alt="Image" />
                            </div>
                        </div>
                        <div className="view-info">
                            <p>Shoes</p>
                            <h2>{product.name}</h2>
                            <div className='v-info-description'>{product.description}</div>
                            <div className='v-info-price'>{product.price}$</div>
                            <button className='btn v-add-to-cart-btn'>Add to card</button>
                        </div>
                    </div>
                </div>
            ) )             
        }
        </>
     );
}
 
export default View;