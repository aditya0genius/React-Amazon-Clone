import React from 'react';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

    
function Checkout() {
    const [{ cart }] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className="checkout_ad" src='https://m.media-amazon.com/images/G/31/prime/AR-2150x240-new.jpg' alt='banner'/>
        {cart?.length === 0 ? (
            <div>
                <h2>Your Cart is Empty</h2>
            </div>

        ) : (
            <div>
                <h2 className='checkout_title'>Your Cart</h2>
                {cart.map(item => (
                    <CheckoutProduct
                    id = {item.id}
                    title = {item.title}
                    image= {item.image}
                    price = {item.price}
                    rating = {item.rating}
                    />

                ))}
                
            </div>

        )}
        </div>
        {cart.length >0 && (
            <div className='checkout_right'>
                <Subtotal />
                </div>
        )}
        
    </div>
  );
}

export default Checkout