import { useEffect, useState } from "react";

import harvestsAPI from "../api/harvests-api";

export const useGetHarvestsByHiveId = (hiveId) => {
    const [hiveHarvests, setHiveHarvests] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await harvestsAPI.getByHiveId(hiveId);

            setHiveHarvests(Object.values(result));
            setIsFetching(false);
        })();
    }, []);

    const changeHarvests = (state) => {
        setHiveHarvests(state)
    };

    return {
        hiveHarvests,
        changeHarvests,
        isFetching
    };
};

export const useGetHarvestsCountByHiveId = (hiveId) => {
    const [hiveHarvestsCount, setHiveHarvestsCount] = useState(0);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await harvestsAPI.getCountByHiveId(hiveId);

            setHiveHarvestsCount(result);
            setIsFetching(false);
        })();
    }, []);

    return {
        hiveHarvestsCount,
        isFetching
    };
};

export const useAddHarvest = () => {
    const addHarvestHandler = async (data) => {
        const formattedData = {
            ...data,
            harvestDate: new Date(data.harvestDate).toISOString(),
        };

        await harvestsAPI.add(formattedData);
    };

    return addHarvestHandler;
};

export const useDeleteHarvest = () => {
    const deleteHarvestHandler = (harvestId) => harvestsAPI.remove(harvestId);

    return deleteHarvestHandler;
};