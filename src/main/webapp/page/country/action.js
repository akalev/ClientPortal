import httpClient from "../../service/httpClient";
import {ACTION_GET_COUNTRY, ENDPOINT_COUNTRY} from "../../common/constant";

export const getCountries = dispatch => {
    httpClient.get(ENDPOINT_COUNTRY)
        .then(({ data }) => dispatch({ type: ACTION_GET_COUNTRY, data}))
        .catch(error => console.log(error));
};
