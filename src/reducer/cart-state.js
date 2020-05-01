const updateItem = (itemGot, itemFound = {}, topicItemGot, idItemGot, quantity) => {
    const {
        title       = itemGot.title,
        id          = idItemGot,
        topic       = topicItemGot,
        price       = itemGot.price,
        count       = 0,
        initPrice   = itemGot.price
    } = itemFound;

    return {
        title,
        id,
        topic,
        count: count + quantity,
        price: initPrice * (count + quantity),
        initPrice
    }
}

const updateCartArray = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1),
        ]
    } 

    if (idx === -1) {
        return [...cartItems, item]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1),
    ]
};

const cartItemOnChange = (cartItems, itemGot, topic, id, quantity) => {
    // 1. Проверим наличие дупликата в массиве корзины
    console.log(itemGot);
    const itemFound     = cartItems.find( (item = {}) => item.title === itemGot.title);
    const itemFoundIdx  = cartItems.findIndex( (item = {}) => item.title === itemGot.title);

    // 2. Напишем функцию, которая создает новый элемент или обрабатывает старый
    const newItem       = updateItem(itemGot, itemFound, topic, id, quantity);

    // 3. Напишем функцию, которая обновляет массив
    const newArray = updateCartArray(cartItems, newItem, itemFoundIdx);

    // 4. Реализуем пересчет всей цены
    let total = 0;
    newArray.forEach( item => {
        total += item.price;
    });

    return {
        cartItems: newArray,
        totalPrice: total
    }
}

const initialCart = {
    cartItems:[],
    totalPrice: 0,
};

const CartState = ({cartState = initialCart} = {}, action) => {
    switch (action.type) {
        case 'CART_ON_ADDED': 
            return cartItemOnChange(cartState.cartItems, action.payload.item, action.payload.topic, action.payload.idx, 1);

        case 'CART_ON_REMOVE': 
            return cartItemOnChange(cartState.cartItems, action.payload.item, action.payload.topic, action.payload.idx, -1);

        case 'CART_ALL_ON_REMOVE': 
            return cartItemOnChange(cartState.cartItems, action.payload.item, action.payload.topic, action.payload.idx, -(action.payload.item.count));

        default:
            return {
               ...cartState
            }
    }
}

export default CartState;

