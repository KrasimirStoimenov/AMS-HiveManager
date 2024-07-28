import { useAuthContext } from "../contexts/AuthContext"
import { clearAuthData, setAuthData } from "../utils/authDataUtils";

import authAPI from "../api/auth-api";

export const useLogin = () => {
    const { changeAuthState } = useAuthContext();
    const loginHandler = async (loginData) => {

        const result = await authAPI.login(loginData);
        delete result.password;

        changeAuthState(result);
    };

    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useAuthContext();
    const registerHandler = async (email, password) => {

        const result = await authAPI.register({ email, password });
        delete result.password;

        changeAuthState(result);
    };

    return registerHandler;
}

export const useLogout = () => {
    const { changeAuthState } = useAuthContext();
    const logoutHandler = async () => {

        await authAPI.logout();
        changeAuthState({});
    };

    return logoutHandler;
}