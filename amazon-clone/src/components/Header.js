import React from 'react';
import "../style/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
  return (
    <nav className='header'>
        <Link to="/">
            <img 
                className='header__logo' 
                src='https://pngimg.com/uploads/amazon/amazon_PNG25.png' 
                alt='Amazon Logo'
            />
        </Link>
        <div className='header__search'>
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
        </div>
        <div className='header__nav'>
            <Link to="/login" className='header__link'>
                <div className='header__option'>
                    <span className='header__option1'>Hello</span>
                    <span className='header__option2'>Sign In</span>
                </div>
            </Link>
            <Link to="/" className='header__link'>
                <div className='header__option'>
                    <span className='header__option1'>Returns</span>
                    <span className='header__option2'>& Orders</span>
                </div>
            </Link>
            <Link to="/" className='header__link'>
                <div className='header__option'>
                    <span className='header__option1'>Your</span>
                    <span className='header__option2'>Prime</span>
                </div>
            </Link>
            <Link to="/checkout" className='header__link'>
                <div className='header__optionCart'>
                    <ShoppingCartIcon/>
                    <span className='header__option2 header__cartCount'>0</span>
                </div>
            </Link>
        </div>
    </nav>
  )
}

export default Header