import requester from './requester'

const BASE_URL = `http://localhost:3030/data/hives`;

const getAll = () => requester.get(`${BASE_URL}`);
const getById = (hiveId) => {
    const params = new URLSearchParams({
        load: `apiary=apiaryId:apiaries`
    });

    return requester.get(`${BASE_URL}/${hiveId}?${params.toString()}`);
};

const getByApiaryId = (apiaryId) => {
    const params = new URLSearchParams({
        where: `apiaryId="${apiaryId}"`
    });

    return requester.get(`${BASE_URL}?${params.toString()}`);
};

const add = (data) => requester.post(`${BASE_URL}`, data);
const remove = (hiveId) => requester.del(`${BASE_URL}/${hiveId}`);

const hivesAPI = {
    getAll,
    getById,
    getByApiaryId,
    add,
    remove
};

export default hivesAPI;