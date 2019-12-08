import {
    ACTION_ADD_CLIENT,
    ACTION_GET_CLIENT, ACTION_RESET_SAVED, ACTION_SELECT_CLIENT, ACTION_SET_ADDRESS, ACTION_SET_COUNTRY_ID,
    ACTION_SET_EMAIL,
    ACTION_SET_FIRST_NAME,
    ACTION_SET_LAST_NAME, ACTION_SET_USER_ID, ACTION_UPDATE_CLIENT
} from "../../common/constant";

const initialState = {
    list: [],
    client: {
        id: undefined,
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        address: undefined,
        country: {
            id: undefined
        }
    },
    saved: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_GET_CLIENT:
            return { ...state, list: action.data };
        case ACTION_ADD_CLIENT:
            return { ...state, list: [...state.list, action.data], saved: true };
        case ACTION_SET_FIRST_NAME:
            return { ...state, client: { firstName: action.value }};
        case ACTION_SET_LAST_NAME:
            return { ...state, client: { lastName: action.value }};
        case ACTION_SET_EMAIL:
            return { ...state, client: { email: action.value }};
        case ACTION_SET_ADDRESS:
            return { ...state, client: { address: action.value }};
        case ACTION_SET_USER_ID:
            return { ...state, client: { user: { id: action.value }}};
        case ACTION_SET_COUNTRY_ID:
            return { ...state, client: { country: { id: action.value }}};
        case ACTION_UPDATE_CLIENT:
            return { ...state, client: action.data };
        case ACTION_RESET_SAVED:
            return { ...state, client: initialState.client, saved: false };
        case ACTION_SELECT_CLIENT: {
            const client = state.list.find(({ id }) => action.id);
            return { ...state, client };
        }
        default:
            return state;
    }
}