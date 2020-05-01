// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// HOC
import withMSS from '../components/hoc';

// Actions 
import { dataTypeSelect } from '../actions';

// Components
import TypeList from '../components/const-components/type-list';

// Actual Container 
const TypeListContainer = ( {state, dataTypeSelect} ) => {
    const {mainPageState} = state;
    const {topic} = mainPageState;
    return (
        <TypeList topic={topic} dataTypeSelect={dataTypeSelect}/>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dataTypeSelect: (topic) => dispatch( dataTypeSelect(topic) )
    }
}

const mapStateToProps = ( state ) => {
    return { state };
}

export default withMSS()(connect(mapStateToProps, mapDispatchToProps)(TypeListContainer));