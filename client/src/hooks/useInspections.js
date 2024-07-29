import { useEffect, useState } from "react";

import inspectionsAPI from "../api/inspections-api";

export const useGetByHiveId = (hiveId) => {
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
    }
}