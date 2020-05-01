const usRequested = () => { 
    return {
        type: 'UNUSUAL_ITEM_REQUESTED', 
    }
}

const usParameter = ( parameter ) => { 
    return {
        type: 'UNUSUAL_ITEM_PARAMETER_DEFINED',
        payload: parameter, 
    }
}

const usTopic = ( topic ) => { 
    return {
        type: 'UNUSUAL_ITEM_TOPIC_DEFINED', 
        payload: topic
    }
}

const usLoad = ( data ) => { 
    return {
        type: 'UNUSUAL_ITEM_ON_LOAD', 
        payload: data,
    }
}

const fetchUS = (mss, topic, parameter, dispatch, cancelled) => {
    dispatch(usRequested());
    dispatch(usTopic(topic));
    dispatch(usParameter(parameter));
    mss.getUnusual(topic, parameter)
        .then(data => {!cancelled && dispatch(usLoad(data) ) })
}

export {
    usRequested,
    usParameter,
    usTopic, 
    usLoad,
    fetchUS
}