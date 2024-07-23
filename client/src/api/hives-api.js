import requester from './requester'

const BASE_URL = `http://localhost:3030/jsonstore/hives`;

const getAll = () => requester.get(`${BASE_URL}`);
const create = (data) => requester.post(`${BASE_URL}`, data);

const hivesAPI = {
    getAll,
    create,
};

export default hivesAPI;