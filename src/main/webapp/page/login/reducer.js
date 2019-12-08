import {ACTION_LOGIN, ACTION_SET_PASSWORD, ACTION_SET_USERNAME} from "../../common/constant";

const initialState = {
    user: {
        username: undefined,
        password: undefined
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_USERNAME:
            return { ...state, user: { username: action.value }};
        case ACTION_SET_PASSWORD:
            return { ...state, user: { password: action.value }};
        case ACTION_LOGIN:
            return { ...state, user: { username: undefined, password: undefined }};
        default:
            return state;
    }
}