import { useQuery } from "@tanstack/react-query";
import { gameInfoKeys } from "./key";
import { fetchGameInfo } from "./functions";
import { gameInfoSelector } from "./selector";


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


