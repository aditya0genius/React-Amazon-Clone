import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div>
        <img
        className="home_image"
        src="https://m.media-amazon.com/images/I/71Awhus15wL._SX3000_.jpg"
        alt='Banner'
        />
        <div className='home_row'>
          <Product id={1234} 
           title="The Rudest Book Ever"
            price={11.96}
            rating={5}
            image="https://n3.sdlcdn.com/imgs/i/5/m/The-Rudest-Book-Ever-SDL450719385-1-02090.jpg"
           />
           <Product id={1234} 
           title="The Rudest Book Ever"
            price={11.96}
            rating={5}
            image="https://n3.sdlcdn.com/imgs/i/5/m/The-Rudest-Book-Ever-SDL450719385-1-02090.jpg"
           />
        </div>
        <div className='home_row'>
          <Product id={1234} 
           title="The Rudest Book Ever"
            price={11.96}
            rating={5}
            image="https://n3.sdlcdn.com/imgs/i/5/m/The-Rudest-Book-Ever-SDL450719385-1-02090.jpg"
           />
           <Product id={1234} 
           title="The Rudest Book Ever"
            price={11.96}
            rating={5}
            image="https://n3.sdlcdn.com/imgs/i/5/m/The-Rudest-Book-Ever-SDL450719385-1-02090.jpg"
           />
           <Product id={1234} 
           title="The Rudest Book Ever"
            price={11.96}
            rating={5}
            image="https://n3.sdlcdn.com/imgs/i/5/m/The-Rudest-Book-Ever-SDL450719385-1-02090.jpg"
           />
        </div>
        
    </div>
    
  )
}

export default Home