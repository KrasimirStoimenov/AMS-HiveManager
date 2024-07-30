import requester from './requester'

const BASE_URL = `http://localhost:3030/data/beeQueens`;

const getAll = (userId) => {
    const params = new URLSearchParams({
        where: `_ownerId="${userId}"`,
        load: `hive=hiveId:hives`
    });

    return requester.get(`${BASE_URL}?${params.toString()}`);
};

const getById = (beeQueenId) => requester.get(`${BASE_URL}/${beeQueenId}`);
const getByHiveId = (hiveId) => {
    const params = new URLSearchParams({
        where: `hiveId="${hiveId}"`
    });

    return requester.get(`${BASE_URL}?${params.toString()}`);
};

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
    getByHiveId,
    getCountByHiveId,
    add,
    remove,
};

export default beeQueensAPI;