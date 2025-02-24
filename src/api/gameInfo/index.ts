import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { GAME_INFO_FETCH_INTERVAL } from "../constant";
import { gameInfoKeys } from "./key";
import { fetchGameInfo, updateGameInfo } from "./functions";
import { gameInfoSelector } from "./selector";
import type { GameStatus } from "../../game/types";


export const useGetGameInfo = (gameId: string) => {
    const { data, isPending, isError } = useQuery({
        queryKey: gameInfoKeys.id(gameId),
        queryFn: () => fetchGameInfo(gameId),
        select: gameInfoSelector,
        refetchInterval: GAME_INFO_FETCH_INTERVAL,
    });
    return { data, isPending, isError };
};

export const usePutGameInfo = (gameId: string) => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (gameStatus: Partial<GameStatus>) => updateGameInfo(gameId, gameStatus),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: gameInfoKeys.id(gameId),
            })
        }
    });
    return mutation;
};
