import requester from './requester'

const BASE_URL = `http://localhost:3030/data/beeQueens`;

const getAll = () => requester.get(`${BASE_URL}`);
const getById = (beeQueenId) => requester.get(`${BASE_URL}/${beeQueenId}`);
const getByHiveId = (hiveId) => {
    const params = new URLSearchParams({
        where: `hiveId="${hiveId}"`
    });

    return requester.get(`${BASE_URL}?${params.toString()}`);
};

const getAllWithHive = () => {
    const params = new URLSearchParams({
        load: `hive=hiveId:hives`
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
    getAllWithHive,
    getCountByHiveId,
    add,
    remove,
};

export default beeQueensAPI;