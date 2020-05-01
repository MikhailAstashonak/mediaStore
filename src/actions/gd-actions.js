const goodDescriptionRequested = () => {
    return {
        type: 'GOOD_DESCRIPTION_REQUESTED'
    }
}

const goodDescriptionDefined = (payload) => {
    return {
        type: 'GOOD_DESCRIPTION_DEFINED',
        payload,
    }
}

const goodDescriptionLoad = (payload) => {
    return {
        type: 'GOOD_DESCRIPTION_LOAD',
        payload,
    }
}

export {
    goodDescriptionRequested,
    goodDescriptionDefined,
    goodDescriptionLoad,
}