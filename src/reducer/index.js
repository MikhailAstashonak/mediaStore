// Reducer parts
import MainPageState from './main-page-state';
import UnsusualSectionState from './unusual-section-state';
import GoodDescriptionState from './good-description-state';
import CartState from './cart-state';

// Reducer
const reducer = ( state, action ) => {
    return {
        mainPageState: MainPageState(state, action),
        unsusualSectionState: UnsusualSectionState(state, action),
        goodDescriptionState: GoodDescriptionState(state, action),
        cartState: CartState(state, action),
    }
}

export default reducer;