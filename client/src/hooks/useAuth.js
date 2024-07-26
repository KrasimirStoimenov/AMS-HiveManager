import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import authAPI from "../api/auth-api";
import { clearAuthData, setAuthData } from "../utils/authDataUtils";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);
    const login = async (loginData) => {

        const result = await authAPI.login(loginData);
        delete result.password;

        changeAuthState(result);
        setAuthData(result);
    };

    return login;
}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);
    const register = async (email, password) => {

        const result = await authAPI.register({ email, password });
        delete result.password;

        changeAuthState(result);
        setAuthData(result);
    };

    return register;
}

export const useLogout = () => {
    const { changeAuthState } = useContext(AuthContext);
    const logout = async () => {

        await authAPI.logout();
        changeAuthState({});
        clearAuthData();
    };

    return logout;
}