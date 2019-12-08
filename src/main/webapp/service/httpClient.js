import axios from 'axios';

import { API_URL } from '../config';

const get = async (path, params) => {
    try {
        return await axios.get(`${API_URL}${path}`, { params });
    } catch (error) {
        console.log('get request error: ', error);
    }
    return false;
};

const post = async (path, data, config) => {
    const formData = new FormData();

    if (data) {
        Object.entries(data).forEach(([key, value]) => formData.set(key, value));
    }

    try {
        return await axios.post(`${API_URL}${path}`, formData, { ...config });
    } catch (error) {
        console.log('post request error', error.message);
    }
    return false;
};

const put = async (path, data, config) => {
    const formData = new FormData();

    if (data) {
        Object.entries(data).forEach(([key, value]) => formData.set(key, value));
    }

    try {
        return await axios.put(`${API_URL}${path}`, formData, { ...config });
    } catch (error) {
        console.log('put request error', error.message);
    }
    return false;
};

export default { get, post };