import { useEffect, useState } from "react";

import inspectionsAPI from "../api/inspections-api";

export const useGetInspectionsByHiveId = (hiveId) => {
    const [hiveInspections, setHiveInspections] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await inspectionsAPI.getByHiveId(hiveId);

            setHiveInspections(Object.values(result));
            setIsFetching(false);
        })();
    }, []);

    return {
        hiveInspections,
        isFetching
    };
};

export const useGetInspectionsCountByHiveId = (hiveId) => {
    const [hiveInspectionsCount, setHiveInspectionsCount] = useState();
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await inspectionsAPI.getCountByHiveId(hiveId);
            console.log(result);
            setHiveInspectionsCount(result);
            setIsFetching(false);
        })();
    }, []);

    return {
        hiveInspectionsCount,
        isFetching
    };
};