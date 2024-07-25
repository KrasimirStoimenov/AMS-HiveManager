import requester from './requester'

const BASE_URL = `http://localhost:3030/jsonstore/beeQueens`;

const getAll = () => requester.get(`${BASE_URL}`);
const getById = (beeQueenId) => requester.get(`${BASE_URL}/${beeQueenId}`);
const add = (data) => requester.post(`${BASE_URL}`, data);

const beeQueensAPI = {
    getAll,
    getById,
    add,
};

export default beeQueensAPI;