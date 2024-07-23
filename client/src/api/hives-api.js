import requester from './requester'

const BASE_URL = `http://localhost:3030/jsonstore/hives`;

const getAll = () => requester.get(`${BASE_URL}`);
const add = (data) => requester.post(`${BASE_URL}`, data);

const hivesAPI = {
    getAll,
    add,
};

export default hivesAPI;