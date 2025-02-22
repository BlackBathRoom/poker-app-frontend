import { useGetGameInfo, usePutGameInfo } from "../api/gameInfo";
import { useGetUser, usePutUserInfo } from "../api/users";
import { action as actionFunc } from "../game/action";
import { ActionType } from "../game/types";


export const useGame = (userId: string, gameId: string) => {
    const userQuery = useGetUser(userId);
    const gameQuery = useGetGameInfo(gameId);

    const userMutate = usePutUserInfo(userId);
    const gameMutate = usePutGameInfo(gameId);

    const isPending = userQuery.isPending || gameQuery.isPending;
    const isError = userQuery.isError || gameQuery.isError;
    const data = {
        user: userQuery.data,
        game: gameQuery.data,
    };

    const action = (actionType: ActionType, amount: number) => {
        if (!userQuery.data || !gameQuery.data) throw new Error("情報が取得できません");
        const update = actionFunc(
            actionType,
            { currentBet: gameQuery.data.currentBet, pot: gameQuery.data.pot },
            { chip: userQuery.data.chip, amount },
        );
        userMutate.mutate(update.userInfo);
        gameMutate.mutate(update.gameInfo);
    };

    return { isPending, isError, data, action };
};
