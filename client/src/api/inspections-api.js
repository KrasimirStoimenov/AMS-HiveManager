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

const add = (data) => requester.post(`${BASE_URL}`, data);
const remove = (inspectionId) => requester.del(`${BASE_URL}/${inspectionId}`);

const inspectionsAPI = {
    getByHiveId,
    getCountByHiveId,
    add,
    remove
};

export default inspectionsAPI;