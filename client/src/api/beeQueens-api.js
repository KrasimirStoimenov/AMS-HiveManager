import requester from './requester'

const BASE_URL = `http://localhost:3030/data/beeQueens`;

const getAll = () => requester.get(`${BASE_URL}`);
const getById = (beeQueenId) => requester.get(`${BASE_URL}/${beeQueenId}`);

const getCountByHiveId = (hiveId) => {
    const params = new URLSearchParams({
        where: `hiveId="${hiveId}"`
    });

    return requester.get(`${BASE_URL}?${params.toString()}&count`);
};

const add = (data) => requester.post(`${BASE_URL}`, data);
const remove = (beeQueenId) => requester.del(`${BASE_URL}/${beeQueenId}`);

const beeQueensAPI = {
    getAll,
    getById,
    getCountByHiveId,
    add,
    remove,
};

export default beeQueensAPI;