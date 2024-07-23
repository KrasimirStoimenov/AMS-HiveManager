import requester from './requester'

const BASE_URL = 'http://localhost:3030/jsonstore/apiaries';

const getAll = () => requester.get(`${BASE_URL}`);
const getById = (id) => requester.get(`${BASE_URL}/${id}`);
const add = (data) => requester.post(`${BASE_URL}`, data);

const apiariesAPI = {
    getAll,
    getById,
    add
};

export default apiariesAPI;