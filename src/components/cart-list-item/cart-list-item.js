// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './cart-list-item.css';

// Actual Component
const CartListItem = ( {data, idx, eventListeners: {cartOnAdded, cartOnRemove, cartAllOnRemove}}) => {
    console.log(data);
    return (
        <tr key={idx}>
            <td className='idx-td'> {idx + 1}. </td>
            <td><Link to={`/${data.topic}/${data.id}`} className='td-link'> {data.title} </Link> </td>
            <td> ${data.price}</td>
            <td> {data.count} </td>
            <td className = 'cart-btns'>
                <button onClick={ () => {cartOnAdded({item: data, idx: data.id, topic: data.topic})} } className='action action-add'><i class="far fa-plus-square"></i></button>
                <button onClick={ () => {cartOnRemove({item: data, idx})} } className='action action-remove'><i class="far fa-minus-square"></i></button>
                <button onClick={ () => {cartAllOnRemove({item: data, idx})} } className='action action-remove-all'><i class="far fa-trash-alt"></i></button>
            </td> 
        </tr>
    )
}

export default CartListItem;
