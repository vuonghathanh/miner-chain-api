const axios = require('axios');
const queryString = require('query-string');


const API_URL = 'http://13.214.179.118:3001/';

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
        return error.response.data;
    }
);


class MinerApi {
    async work(data) {
        const url = 'work'
        return await axiosClient.post(url, data)
    }
}

exports = module.exports = new MinerApi()