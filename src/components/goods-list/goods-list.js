// Dependencies 
import React from 'react';

// Styles
import './goods-list.css';

// Components
import GoodsListItem from '../goods-list-item';

// Actual Component
const GoodsList = ( {goods} ) => {
    
    const elements = goods.map( (item, idx ) => {
        return <GoodsListItem good={item} idx={idx} />
    })

    return (
        <ul className='goods-list'>
            { elements }
        </ul>
    )
}

export default GoodsList;