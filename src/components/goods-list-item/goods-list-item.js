// Dependencies
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

// Styles
import './goods-list-item.css';

// Actual Component
const GoodsListItem = ( {good, idx} ) => {

    const { url } = useRouteMatch();

    return(
        <li key={idx} className='gl-card'>
                <img src={good.pictureUrl} alt={good.title} />
                <div className='gl-text'>
                    <Link to={`${url}/${idx}`} className='gl-title-link'> 
                        <span className='gl-card-title'>{good.title}</span>
                    </Link>
                    <div className='gl-card-description'>
                        <span> {good.author}{good.developer}{good.director}</span>
                        <span> ${good.price} </span>
                    </div>
                </div>
        </li>
    )
}

export default GoodsListItem;