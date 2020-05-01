// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from '../components/header-components/header';

// Actions
import { dataTypeSelect } from '../actions';

// Actual Container
const HeaderContainer = ( {dataTypeSelectHeader, cartState} ) => {
    let goodsCount = cartState.cartItems.length;
    return <Header dataTypeSelect = {dataTypeSelectHeader} goodsCount={goodsCount} />
}

const mapStateToProps = (state) => {
    const {cartState} = state;
    return { cartState };
}

const mapDispatchToProps = (dispatch) => {
    return {
        dataTypeSelectHeader: () => dispatch( dataTypeSelect()) ,
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);