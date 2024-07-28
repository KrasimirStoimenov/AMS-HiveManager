import requester from "./requester";

const BASE_URL = 'http://localhost:3030/users';

const login = (loginData) => requester.post(`${BASE_URL}/login`, loginData);
const register = (registerData) => requester.post(`${BASE_URL}/register`, registerData);
const logout = () => requester.get(`${BASE_URL}/logout`);

const authAPI = {
    login,
    register,
    logout
}

export default authAPI;