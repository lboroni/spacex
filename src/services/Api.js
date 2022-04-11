import axios from 'axios';

const axiosClient = axios.create();
axiosClient.defaults.timeout = 20000;

const url = "https://api.spacexdata.com/v4/";

const Api = {
    version: "v4",
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
        getByID: async function (id) {
            const resp = axiosClient.get(`${url}launches/${id}`);
            return await resp;
        },
    },
    rockets: {
        getByID: async function (id) {
            const resp = axiosClient.get(`${url}rockets/${id}`);
            return await resp;
        },
    },
    error: {
        default: (error) => console.log('error', error)
    }
};

export default Api;