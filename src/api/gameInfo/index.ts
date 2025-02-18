import { useMutation, useQuery } from "@tanstack/react-query";
import { gameInfoKeys } from "./key";
import { fetchGameInfo, updateGameInfo } from "./functions";
import { gameInfoSelector } from "./selector";
import { GameStatus } from "../../game/types";
import { queryClient } from "../../main";


export const useGetGameInfo = (gameId: string) => {
    const { data, isPending, isError } = useQuery(
        {
            queryKey: gameInfoKeys.withId(gameId),
            queryFn: () => fetchGameInfo(gameId),
            select: gameInfoSelector,
        },
    );
    return { data, isPending, isError };
};

export const usePutGameInfo = (gameId: string) => {
    const mutation = useMutation({
        mutationFn: (gameStatus: Partial<GameStatus>) => updateGameInfo(gameId, gameStatus),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: gameInfoKeys.withId(gameId),
            })
        }
    });
    return mutation;
};
