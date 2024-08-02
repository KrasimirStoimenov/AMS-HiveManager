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

    const changeInspections = (state) => {
        setHiveInspections(state)
    };

    return {
        hiveInspections,
        changeInspections,
        isFetching
    };
};

export const useGetInspectionsCountByHiveId = (hiveId) => {
    const [hiveInspectionsCount, setHiveInspectionsCount] = useState(0);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await inspectionsAPI.getCountByHiveId(hiveId);

            setHiveInspectionsCount(result);
            setIsFetching(false);
        })();
    }, []);

    return {
        hiveInspectionsCount,
        isFetching
    };
};

export const useAddInspection = () => {
    const addInspectionHandler = async (inspectionData) => {
        const formattedData = {
            ...inspectionData,
            date: new Date(inspectionData.date).toISOString(),
        };

        delete formattedData.hiveDisplayName;
        await inspectionsAPI.add(formattedData);
    };

    return addInspectionHandler;
};

export const useDeleteInspection = () => {
    const deleteInspectionHandler = (inspectionId) => inspectionsAPI.remove(inspectionId);

    return deleteInspectionHandler;
};