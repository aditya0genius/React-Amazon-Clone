import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';

function Header() {
    const[{ cart, user }] = useStateValue();
    const login = () => {
        if(user) {
            auth.signOut();
        }
    };
    
  return (
    <nav className="header">
        <Link to="/">
            <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
        </Link>
        <div className="header_search">
            <input type="text" className="header_searchInput"/>
            <SearchIcon className='header_searchIcon'/>
    
        </div>
        <div className='header_nav'>
            <Link to={!user && "/login"} className='header_link'>
            <div onClick={login} className='header_option'>
                <span className='header_optionLineOne'>Hello, {user?.email}</span>
                <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>
            <Link to="/" className='header_link'>
            <div className='header_option'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div>
            </Link>
            <Link to="/" className='header_link'>
            <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span  className='header_optionLineTwo'>Prime</span>
            </div>
            </Link>
            <Link to="/checkout">
            <div className='header_optionBasket'>
                <ShoppingCartIcon/>
                <span className='header_optionLineTwo header_basketCount'>{cart?.length}</span>
            </div>
            </Link>

        </div>
        
    </nav>
  );
}

export default Header