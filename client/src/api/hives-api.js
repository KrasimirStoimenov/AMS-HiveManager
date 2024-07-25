import requester from './requester'

const BASE_URL = `http://localhost:3030/jsonstore/hives`;

const getAll = () => requester.get(`${BASE_URL}`);
const getById = (hiveId) => requester.get(`${BASE_URL}/${hiveId}`);
const add = (data) => requester.post(`${BASE_URL}`, data);

const hivesAPI = {
    getAll,
    getById,
    add,
};

export default hivesAPI;