import {ACTION_GET_COUNTRY} from "../../common/constant";

const initialState = {
    list: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_GET_COUNTRY:
            return { ...state, list: action.data };
        default:
            return state;
    }
}