import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import authAPI from "../api/auth-api";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (loginData) => {

        const result = await authAPI.login(loginData);
        console.log(result);
        changeAuthState(result);
    }

    return loginHandler;
}