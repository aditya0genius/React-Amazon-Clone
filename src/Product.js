import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
function Product({ id, title, image, price, rating}) {
    const [{ }, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    };
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
            <small>$</small> 
            <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>&#9733;</p>
                    ))
                }
            </div>
            
        </div>
        <div className='product_image'>
                <img src={image} alt="{title}"/>
            </div>
            <button onClick={addToCart}>Add to Cart</button>
        
    </div>
  );
}

export default Product