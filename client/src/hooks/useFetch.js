import { useState, useEffect } from "react";
import requester from "../api/requester";

export function useFetch(url, initialData) {
    const [data, setData] = useState(initialData);
    const [isFetching, setIsFetching] = useState(true);
    const [toggleRefetch, setToggleRefetch] = useState(false);

    useEffect(() => {
        (async () => {
            const result = await requester.get(url);

            setData(result);
            setIsFetching(false);
        })();
    }, [url, toggleRefetch]);

    function refetch() {
        setIsFetching(true);
        setToggleRefetch(state => !state);
    };

    return {
        data,
        isFetching,
        refetch
    };
}