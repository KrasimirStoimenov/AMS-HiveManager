import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import authAPI from "../api/auth-api";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const login = async (loginData) => {

        const result = await authAPI.login(loginData);
        changeAuthState(result);
    }

    return login;
}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const register = async (registerData) => {

        const result = await authAPI.register(registerData);
        changeAuthState(result);
    }

    return register;
}