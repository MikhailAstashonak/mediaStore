// Main page managing
const MainPageState = ( state , action ) => {
    console.log(action.type)

    switch (action.type) {
        case 'DATA_TYPE_SELECT':
            return {
                topic: action.payload,
                data: [],
                loading: true,
            };

        case 'GOODS_ON_LOAD':
            return {
                ...state.mainPageState,
                data: action.payload,
                loading: false
            }
        
        default:
            return {
                topic: undefined,
                data: [],
                loading: true,
            };
    }
}

export default MainPageState;