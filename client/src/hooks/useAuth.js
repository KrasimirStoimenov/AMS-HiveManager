import { useAuthContext } from "../contexts/AuthContext"
import { clearAuthData, setAuthData } from "../utils/authDataUtils";

import authAPI from "../api/auth-api";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();
    const login = async (loginData) => {

        const result = await authAPI.login(loginData);
        delete result.password;

        changeAuthState(result);
        setAuthData(result);
    };

    return login;
}

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();
    const register = async (email, password) => {

        const result = await authAPI.register({ email, password });
        delete result.password;

        changeAuthState(result);
        setAuthData(result);
    };

    return register;
}

export const useLogout = () => {
    const { changeAuthState } = useAuthContext();
    const logout = async () => {

        await authAPI.logout();
        changeAuthState({});
        clearAuthData();
    };

    return logout;
}