// Actual reducer's func
const GoodDescriptionState = (state, action) => {
    switch(action.type) {
        case 'GOOD_DESCRIPTION_REQUESTED':
            return {
                id: undefined,
                data: {},
                topic: undefined,
                loading: true
            };

        case 'GOOD_DESCRIPTION_DEFINED':
            return {
                ...state.goodDescriptionState,
                id: action.payload.id,
                topic: action.payload.topic
            };

        case 'GOOD_DESCRIPTION_LOAD':
            return {
                ...state.goodDescriptionState,
                data: action.payload,
                loading: false
            };

        default: 
            return {
                id: undefined,
                topic: undefined,
                data: {},
                loading: true,
            }
    }
}

export default GoodDescriptionState;