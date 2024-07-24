import { useState, useEffect } from "react";
import requester from "../api/requester";

export function useFetch(url, initialData) {
    const [data, setData] = useState(initialData);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await requester.get(url);
                 
            setData(result);
            setIsFetching(false);
        })();
    }, [url]);

    return {
        data,
        isFetching
    };
}