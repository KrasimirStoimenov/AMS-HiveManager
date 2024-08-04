import { useEffect, useState } from "react";
import hivesAPI from "../api/hives-api";
import { useHiveContext } from "../contexts/HiveContext";

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
    };
};

export const useGetHiveById = (hiveId) => {
    const [hive, setHive] = useState({
        number: '',
        type: '',
        status: '',
        color: '',
        dateBought: '',
        apiaryId: '',
    });
    const [isFetching, setIsFetching] = useState(true);
    const { changeHiveState } = useHiveContext();

    useEffect(() => {
        (async () => {
            const result = await hivesAPI.getById(hiveId);

            setHive(result);
            setIsFetching(false);
            changeHiveState(result);
        })();
    }, []);

    return {
        hive,
        isFetching
    };
};

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
    };
};

export const useAddHive = () => {
    const addHiveHandler = async (data) => {
        const formattedData = {
            ...data,
            dateBought: new Date(data.dateBought).toISOString(),
        };

        await hivesAPI.add(formattedData);
    };

    return addHiveHandler;
};

export const useUpdateHive = () => {
    const updateHiveHandler = async (hiveId, hive) => { await hivesAPI.update(hiveId, hive); };

    return updateHiveHandler;
};

export const useDeleteHive = () => {
    const deleteHiveHandler = (hiveId) => hivesAPI.remove(hiveId);

    return deleteHiveHandler;
};