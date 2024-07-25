import requester from './requester'

const BASE_URL = `http://localhost:3030/jsonstore/beeQueens`;

const getAll = () => requester.get(`${BASE_URL}`);
const getById = (beeQueenId) => requester.get(`${BASE_URL}/${beeQueenId}`);
const add = (data) => requester.post(`${BASE_URL}`, data);
const remove = (beeQueenId) => requester.del(`${BASE_URL}/${beeQueenId}`);

const beeQueensAPI = {
    getAll,
    getById,
    add,
    remove,
};

export default beeQueensAPI;