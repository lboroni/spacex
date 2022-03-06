import axios from 'axios';

const axiosClient = axios.create();
axiosClient.defaults.timeout = 20000;

const url = "https://api.spacexdata.com/v3/";

const Api = {
    launches: {
        all: function (limit, id, sort) {
            return axiosClient.get(`${url}launches?limit=${limit}&id=${id}&sort=${sort}`);
        },
        past: function (limit, id) {
            return axiosClient.get(`${url}launches/past?limit=${limit}&id=${id}`);
        },
        upcoming: function (limit, id) {
            return axiosClient.get(`${url}launches/upcoming?limit=${limit}&id=${id}`);
        },
    },
};

export default Api;