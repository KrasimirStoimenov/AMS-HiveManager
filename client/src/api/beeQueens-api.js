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

const add = (beeQueen) => requester.post(`${BASE_URL}`, beeQueen);
const update = (beeQueenId, beeQueen) => requester.put(`${BASE_URL}/${beeQueenId}`, beeQueen)
const remove = (beeQueenId) => requester.del(`${BASE_URL}/${beeQueenId}`);

const beeQueensAPI = {
    getAll,
    getById,
    getByHiveId,
    getCountByHiveId,
    add,
    update,
    remove,
};

export default beeQueensAPI;