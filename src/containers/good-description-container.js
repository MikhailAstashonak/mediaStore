// Dependencies
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// HOC
import withMSS from '../components/hoc';

// Components 
import Spinner from '../components/semantic-components/spinner';
import DescriptionStateful from '../components/description-pages';

// Actions
import {
    goodDescriptionRequested,
    goodDescriptionDefined,
    goodDescriptionLoad,
} from '../actions';

const GoodDescriptionContainer = ({ 0: {goodId, goodTopic} , mss, data, id, topic, loading, goodDescriptionRequested, 
       goodDescriptionDefined, goodDescriptionLoad}) => {

    useEffect( () => {
        let cancelled = false;
        goodDescriptionRequested();
        goodDescriptionDefined({id: goodId, topic: goodTopic});
        mss.getSpecificItem(goodId, goodTopic)
            .then( data => {!cancelled && goodDescriptionLoad(data)})
        return () => cancelled = true;
    }, [id]);

    if (loading) {
        return <Spinner />
    }

    return (
        <DescriptionStateful data={data} topic={topic} id={goodId}/>
    )
}

const mapStateToProps = (state) => {
    const {goodDescriptionState} = state;
    const {data, id, topic, loading} = goodDescriptionState;
    return {data, id, topic, loading};
}

const mapDispatchToProps = (dispatch) => {
    return {
        goodDescriptionRequested: () => dispatch(goodDescriptionRequested()),
        goodDescriptionDefined: (id) => dispatch(goodDescriptionDefined(id)),
        goodDescriptionLoad: (data) => dispatch(goodDescriptionLoad(data)),
    }
}

export default withMSS()(connect(mapStateToProps, mapDispatchToProps)(GoodDescriptionContainer));