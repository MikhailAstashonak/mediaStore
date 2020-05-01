// Dependencies
import React from 'react';
import {connect} from 'react-redux';

// Action
import {
    cartOnAdded
} from '../actions/cart-actions';

// Actual Container 
const BuyButton = ({item, idx, topic, cartOnAdded, state}) => {
    return (
        <button onClick={ () => cartOnAdded( {item, idx, topic} ) }>
            Buy for {item.price !== 0 ? `$${item.price}` : 'free'}
        </button>
    )
}

const mapStateToProps = (state) => {
    return {
        state,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cartOnAdded: (obj) => dispatch(cartOnAdded(obj)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyButton);
