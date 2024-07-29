import requester from "./requester"

const BASE_URL = `http://localhost:3030/data/inspections`;

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

const inspectionsAPI = {
    getByHiveId,
    getCountByHiveId
};

export default inspectionsAPI;