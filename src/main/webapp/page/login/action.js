import httpClient from "../../service/httpClient";
import {ACTION_LOGIN, ACTION_SET_PASSWORD, ACTION_SET_USERNAME, ENDPOINT_LOGIN, KEY_TOKEN} from "../../common/constant";

export const login = async (user, dispatch) => {
    const {data} = await httpClient.post(ENDPOINT_LOGIN, user);

    if (data) {
        localStorage.setItem(KEY_TOKEN, data);
        dispatch({type: ACTION_LOGIN});
    }
};

export const setUsername = value => ({
    type: ACTION_SET_USERNAME,
    value
});

export const setPassword = value => ({
    type: ACTION_SET_PASSWORD,
    value
});
