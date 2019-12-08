import { createStore, combineReducers } from 'redux';
import client from './page/client/reducer';
import country from './page/country/reducer';
import login from './page/login/reducer';
import { KEY_STORE } from "./common/constant";

const rootReducer = combineReducers({
    client,
    country,
    login
});
const storedState = localStorage.getItem(KEY_STORE);
const store = createStore(rootReducer, storedState);

store.subscribe(() => {
    localStorage.setItem(KEY_STORE, JSON.stringify(store.getState()));
});

export default store;
