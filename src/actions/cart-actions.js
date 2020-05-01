const cartOnAdded = ({item, idx, topic}) => {
    return {
        type: 'CART_ON_ADDED',
        payload: {item, idx, topic},
    }
}

const cartOnRemove = ({item, idxInList}) => {
    return {
        type: 'CART_ON_REMOVE',
        payload: {item, idxInList}
    }
}

const cartAllOnRemove = ( {item, idxInList} ) => {
    return {
        type: 'CART_ALL_ON_REMOVE',
        payload: {item, idxInList}
    }
}

export {
    cartOnAdded, 
    cartOnRemove,
    cartAllOnRemove
}