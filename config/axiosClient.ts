import axios from "axios";
import * as queryString from 'query-string';


const API_URL = 'https://mainnet-api.fireal.io/';

const axiosClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    return config;
});

axiosClient.interceptors.response.use(
    response => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    }, error => {
        return  error.response.data;
    }
);

export default axiosClient;