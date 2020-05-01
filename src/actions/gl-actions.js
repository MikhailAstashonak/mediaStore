const dataTypeSelect = ( topic ) => {
    return {
        type: 'DATA_TYPE_SELECT',
        payload: topic,
    }
} 

// Say, that data has been alredy downloaded and give this data to store
const goodsOnLoad = ( items ) => {
    return {
        type: 'GOODS_ON_LOAD',
        payload: items,
    }
}


export {
    dataTypeSelect,
    goodsOnLoad,
};