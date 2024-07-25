import requester from "./requester";

const BASE_URL = 'http://localhost:3030/users/login';

const login = (loginData) => requester.post(`${BASE_URL}`, loginData)

const authAPI = {
    login
}

export default authAPI;