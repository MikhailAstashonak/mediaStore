// Dependencies
import React from 'react';

// Styles
import './cart-list.css';

// Components 
import CartListItem from '../cart-list-item';

// Actual Component
const CartList = ({data, total, cartOnAdded, cartOnRemove, cartAllOnRemove}) => {
    console.log(data)
    const cartElements = data.map( (item, idx) => {
        return <CartListItem data={item} idx={idx} eventListeners = { {cartOnAdded, cartOnRemove, cartAllOnRemove} }/>
    });

    
    return (
        <section className='cart-section'>
            <table className='cart-list'>
                <tr className='thead'>
                    <th className='thead-title'> Id </th>
                    <th className='thead-title'> Title </th>
                    <th className='thead-title'> Price </th>
                    <th className='thead-title'> Count </th>
                    <th className='thead-title'> Actions</th>
                </tr>
                
                <tbody>
                    {cartElements}
                </tbody>
            </table>
            <p className='cart-total'> Total: ${total}</p>
        </section>
    )
}

export default CartList;