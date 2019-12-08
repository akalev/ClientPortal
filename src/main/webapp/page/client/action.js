import httpClient from "../../service/httpClient";
import {
    ACTION_GET_CLIENT, ACTION_RESET_SAVED, ACTION_SELECT_CLIENT, ACTION_SET_ADDRESS, ACTION_SET_COUNTRY_ID,
    ACTION_SET_EMAIL,
    ACTION_SET_FIRST_NAME,
    ACTION_SET_LAST_NAME, ACTION_SET_USER_ID, ACTION_UPDATE_CLIENT,
    ENDPOINT_CLIENT
} from "../../common/constant";

export const getClientsByUserId = (id, dispatch) => {
    httpClient.get(ENDPOINT_CLIENT)
        .then(({ data }) => dispatch({ type: ACTION_GET_CLIENT, data }))
        .catch(error => console.log(error));
};

export const saveClient = async (client, dispatch) => {
    const { data } = await httpClient.post(ENDPOINT_CLIENT, client);

    if (data) dispatch({ type: ACTION_GET_CLIENT, data });
};

export const updateClient = async (client, dispatch) => {
    const { data } = await httpClient.put(ENDPOINT_CLIENT, client);

    if (data) {
        dispatch({ type: ACTION_UPDATE_CLIENT, data });
    }
};

export const setFirstName = value => ({
    type: ACTION_SET_FIRST_NAME,
    value
});

export const setLastName = value => ({
    type: ACTION_SET_LAST_NAME,
    value
});

export const setEmail = value => ({
    type: ACTION_SET_EMAIL,
    value
});

export const setAddress = value => ({
    type: ACTION_SET_ADDRESS,
    value
});

export const setUserId = value => ({
    type: ACTION_SET_USER_ID,
    value
});

export const setCountryId = value => ({
    type: ACTION_SET_COUNTRY_ID,
    value
});

export const resetSaved = () => ({
    type: ACTION_RESET_SAVED
});

export const selectClient = id => ({
    type: ACTION_SELECT_CLIENT,
    id
});