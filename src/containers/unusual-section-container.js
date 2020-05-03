// Dependencies
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import UnusualSection from '../components/unusual-section';
import Spinner from '../components/semantic-components/spinner';

// HOC
import withMSS from '../components/hoc';

// Action 
import { us_actions } from '../actions';

// Actual Container 
const UnusualSectionContainer = ( { mss, data, topic, parameter, loading, usRequested, usTopic, usParameter, usLoad }) => {
    const topics = ['books', 'games', 'movies'];
    const parameters = ['mostLiked', 'bestseller'];

    let definedTopic = topics[Math.round( Math.random() * (topics.length - 1) )]
    let definedParameter = parameters[Math.round( Math.random() * (parameters.length - 1) )]

    // Store Update
    useEffect(() => {
        usRequested();
        usTopic(definedTopic);
        usParameter(definedParameter);
        let cancelled = false;
        mss.getUnusual(definedTopic, definedParameter)
            .then(data => {!cancelled && usLoad(data) })
        return () => cancelled = true;
    }, [topic])

    if (loading) {
        return <Spinner />
    }

    return (
        <UnusualSection item={data.item} idx={data.idx} parameter={parameter} topic={topic} />
    )
}

const mapStateToProps = ( state ) => {
    const {data, topic, parameter, loading} = state.unsusualSectionState;
    return {data, topic, parameter, loading}
}

const mapDispatchToProps = (dispatch) => {
    const {usRequested, usTopic, usParameter, usLoad} = us_actions;
    return {
        usRequested: () => dispatch(usRequested()),
        usParameter: (parameter) => dispatch(usParameter(parameter)),
        usTopic:     (topic) => dispatch(usTopic(topic)),
        usLoad:      (data) => dispatch(usLoad(data)),
    }
}
export default withMSS()(connect(mapStateToProps, mapDispatchToProps) (UnusualSectionContainer) );