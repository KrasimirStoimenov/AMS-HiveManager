import requester from './requester'

const BASE_URL = `http://localhost:3030/jsonstore/hives`;

const getAll = () => requester.get(`${BASE_URL}`);

const hivesAPI = {
    getAll
};

export default hivesAPI;