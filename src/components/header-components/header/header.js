// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './header.css';


// Actual Component
const Header = ( {dataTypeSelect, goodsCount} ) => {
    return (
        <header>
            <Link to='/' className='header-logo' onClick={ dataTypeSelect }>Media-Store</Link>
            <Link to='/cart' className='header-cart'>
                Your Cart<i class="fas fa-shopping-cart"></i>
                <div className='cart-count'> {goodsCount} </div>
            </Link>
        </header>
    )

}
    

export default Header;