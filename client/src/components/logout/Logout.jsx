import { useEffect } from 'react';
import { useLogout } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function Logout() {
    const logout = useLogout();

    useEffect(() => {
        (async () => {
            try {
                await logout();
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);


    return (<Navigate to={'/login'} />);
};