// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Actions
import {
    cartOnAdded, 
    cartOnRemove,
    cartAllOnRemove
} from '../actions'

// Components
import CartList from '../components/cart-list';

// Actual Container
const CartContainer = ({cartState, cartOnAdded, cartOnRemove, cartAllOnRemove}) => {

    return (
        <CartList 
            data            = {cartState.cartItems}
            total           = {cartState.totalPrice}
            cartOnAdded     = {cartOnAdded}
            cartOnRemove    = {cartOnRemove}
            cartAllOnRemove = {cartAllOnRemove} />
    )
}

const mapStateToProps = ( {cartState} ) => {
    return { cartState };
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        cartOnAdded: (obj) => dispatch(cartOnAdded(obj)),
        cartOnRemove: (obj) => dispatch(cartOnRemove(obj)),
        cartAllOnRemove: (obj) => dispatch(cartAllOnRemove(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);