import axios from 'axios';

const axiosClient = axios.create();
axiosClient.defaults.timeout = 20000;

const url = "https://api.spacexdata.com/v3/";

const Api = {
    launches: {
        all: async function (limit, id, sort, offset) {
            const resp = axiosClient.get(`${url}launches?limit=${limit}&id=${id}&sort=${sort}&offset=${offset}`);
            return await resp; 
        },
        past: async function (limit, id, sort, offset) {
            const resp = axiosClient.get(`${url}launches/past?limit=${limit}&id=${id}&sort=${sort}&offset=${offset}`);
            return await resp;
        },
        upcoming: async function (limit, id, sort, offset) {
            const resp = axiosClient.get(`${url}launches/upcoming?limit=${limit}&id=${id}&sort=${sort}&offset=${offset}`);
            return await resp;
        },
        getByID: async function (flight_number) {
            const resp = axiosClient.get(`${url}launches?flight_number=${flight_number}`);
            return await resp;
        },
    },
};

export default Api;