
import { useAuthContext } from '../../contexts/AuthContext';

import GuestHome from './guest-home/GuestHome';
import ApiaryList from './apiary-list/ApiaryList';

export default function Home() {
    const { isAuthenticated } = useAuthContext();


    return (
        <>
            {isAuthenticated
                ? <ApiaryList />
                : <GuestHome />
            }
        </>
    );
}