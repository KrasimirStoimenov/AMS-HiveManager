import { useEffect, useState } from "react";
import beeQueensAPI from "../api/beeQueens-api";
import { useAuthContext } from "../contexts/AuthContext";

export const useGetAllBeeQueens = () => {
    const [beeQueens, setBeeQueens] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const { userId } = useAuthContext();

    useEffect(() => {
        (async () => {
            try {
                const result = await beeQueensAPI.getAll(userId);
                setBeeQueens(Object.values(result));
            } catch (error) {
            } finally {
                setIsFetching(false);
            }

        })();
    }, []);

    const changeBeeQueens = (state) => {
        setBeeQueens(state);
    };

    return {
        beeQueens,
        changeBeeQueens,
        isFetching
    };
};

export const useGetBeeQueenById = (beeQueenId) => {
    const [beeQueen, setBeeQueen] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await beeQueensAPI.getById(beeQueenId);

            setBeeQueen(result);
            setIsFetching(false);
        })();
    }, []);

    return {
        beeQueen,
        isFetching
    };
};

export const useGetBeeQueensByHiveId = (hiveId) => {
    const [hiveBeeQueens, setHiveBeeQueens] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await beeQueensAPI.getByHiveId(hiveId);

            setHiveBeeQueens(Object.values(result));
            setIsFetching(false);
        })();
    }, []);

    const changeBeeQueens = (state) => {
        setHiveBeeQueens(state)
    };

    return {
        hiveBeeQueens,
        changeBeeQueens,
        isFetching
    };
};

export const useGetBeeQueensCountByHiveId = (hiveId) => {
    const [hiveBeeQueensCount, setHiveBeeQueensCount] = useState(0);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await beeQueensAPI.getCountByHiveId(hiveId);

            setHiveBeeQueensCount(result);
            setIsFetching(false);
        })();
    }, []);

    return {
        hiveBeeQueensCount,
        isFetching
    };
};

export const useAddBeeQueen = () => {
    const addBeeQueenHandler = async (data) => {

        const formattedData = {
            ...data
        };

        delete formattedData.hiveDisplayName;
        await beeQueensAPI.add(data);
    };

    return addBeeQueenHandler;
};

export const useDeleteBeeQueen = () => {
    const deleteBeeQueenHandler = (beeQueenId) => beeQueensAPI.remove(beeQueenId);

    return deleteBeeQueenHandler;
};