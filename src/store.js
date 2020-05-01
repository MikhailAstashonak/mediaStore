// Dependencies
import { createStore } from 'redux';

// Reducer
import reducer from './reducer';

// Store
const store = createStore(reducer);

export default store;