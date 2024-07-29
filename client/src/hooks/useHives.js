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

export const useGetHiveByApiaryId = (apiaryId) => {
    const [apiaryHives, setApiaryHives] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await hivesAPI.getByApiaryId(apiaryId);

            setApiaryHives(Object.values(result));
            setIsFetching(false);
        })();
    }, []);

    return {
        apiaryHives,
        isFetching
    }
}

export const useGetHiveNumberById = (hiveId) => {
    const [hiveNumber, setHiveNumber] = useState(0);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await hivesAPI.getHiveNumberById(hiveId);

            setHiveNumber(result[0].number);
            setIsFetching(false);
        })();
    }, []);

    return {
        hiveNumber,
        isFetching
    }
}

export const useAddHive = () => {
    const addHiveHandler = (data) => {
        const formattedData = {
            ...data,
            dateBought: new Date(data.dateBought).toISOString(),
        };

        hivesAPI.add(formattedData);
    }

    return addHiveHandler;
}

export const useDeleteHive = () => {
    const deleteHiveHandler = (hive) => hivesAPI.remove(hive);

    return deleteHiveHandler;
}