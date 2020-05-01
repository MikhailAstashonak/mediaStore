// Actual reducer func
// Managing unsusual section
const UnsusualSectionState = (state, action) => {

    switch(action.type) {
        case 'UNUSUAL_ITEM_REQUESTED':
            return {
                data: {},
                topic: undefined,
                parameter: undefined,
                loading: true,
            }

        case 'UNUSUAL_ITEM_PARAMETER_DEFINED':
            return {
                ...state.unsusualSectionState,
                parameter: action.payload,
            }
        
        case 'UNUSUAL_ITEM_TOPIC_DEFINED':
            return {
                ...state.unsusualSectionState,
                topic: action.payload,
            }

        case 'UNUSUAL_ITEM_ON_LOAD':
            return  {
                ...state.unsusualSectionState,
                data: action.payload,
                loading: false,
            }

        default: {
            return {
                data: {},
                topic: undefined,
                parameter: undefined,
                loading: true,
            }
        }
    }
} 

export default UnsusualSectionState