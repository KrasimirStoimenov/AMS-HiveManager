import { useEffect, useState } from "react"
import apiariesAPI from "../api/apiaries-api";


export const useGetAllApiaries = () => {
    const [apiaries, setApiaries] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await apiariesAPI.getAll();

            setApiaries(Object.values(result));
            setIsFetching(false);
        })();
    }, []);

    return {
        apiaries,
        isFetching
    }
}

export const useAddApiary = () => {
    const addApiaryHandler = (data) => apiariesAPI.add(data);

    return addApiaryHandler;
}