import { useEffect, useState } from "react";
import hivesAPI from "../api/hives-api";

export const useGetAllHives = () => {
    const [hives, setHives] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await hivesAPI.getAll();

            setHives(Object.values(result));
            setIsFetching(false);
        })();
    }, []);

    return {
        hives,
        isFetching
    }
}

export const useGetHiveById = (hiveId) => {
    const [hive, setHive] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await hivesAPI.getById(hiveId);

            setHive(result);
            setIsFetching(false);
        })();
    }, []);

    return {
        hive,
        isFetching
    }
}

export const useAddHive = () => {
    const addHiveHandler = (data) => hivesAPI.add(data);

    return addHiveHandler;
}