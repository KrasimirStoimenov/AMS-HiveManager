import { useEffect, useState } from "react";
import beeQueensAPI from "../api/beeQueens-api";

export const useGetAllBeeQueens = () => {
    const [beeQueens, setBeeQueens] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [toggleRefetch, setToggleRefetch] = useState(false);

    useEffect(() => {
        (async () => {
            const result = await beeQueensAPI.getAll();

            setBeeQueens(Object.values(result));
            setIsFetching(false);
        })();
    }, [toggleRefetch]);

    function refetch() {
        setIsFetching(true);
        setToggleRefetch(state => !state);
    };

    return {
        beeQueens,
        isFetching,
        refetch
    }
}

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
    }
}

export const useAddBeeQueen = () => {
    const addBeeQueenHandler = (data) => beeQueensAPI.add(data);

    return addBeeQueenHandler;
}

export const useDeleteBeeQueen = () => {
    const deleteBeeQueenHandler = (beeQueenId) => beeQueensAPI.remove(beeQueenId);

    return deleteBeeQueenHandler;
}