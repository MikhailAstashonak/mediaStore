// Dependencies
import React, {  useEffect } from 'react';
import { connect } from 'react-redux';

// Components 
import GoodsList from '../components/goods-list';
import Spinner from '../components/semantic-components/spinner';

// Utils
import withMSS from '../components/hoc';
import { urlGetter } from '../utils/url-getter';

// Actions
import { goodsOnLoad, dataTypeSelect,  } from '../actions';

// Actual Hook
const GoodsListContainer = ({ mss, data, loading, topic, dataTypeSelect, goodsOnLoad}) => {

    useEffect( () => {
        // 'cancelled' for cancelling promise
        let cancelled = false;
        dataTypeSelect(urlGetter());
        mss.getter(urlGetter())
            .then(data => { !cancelled && goodsOnLoad(data) })
        // For cancelling
        return () => cancelled = true;
    }, [topic])

    if (loading) {
           return <Spinner />
       }
    return (
       <GoodsList goods={data} />
    )
}

const mapStateToProps = ( {mainPageState: {data, loading, topic} }) => {
    return {data, loading, topic};
}

const mapDispatchToProps = ( dispatch) => {
    return {
        goodsOnLoad: (data) => dispatch(goodsOnLoad(data)),
        dataTypeSelect: (topic) => dispatch(dataTypeSelect(topic)),
    }
}

// Export with context and store wrapping
export default withMSS()(connect(mapStateToProps, mapDispatchToProps)(GoodsListContainer))
