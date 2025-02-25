import { useGetGameInfo, usePutGameInfo } from "../api/gameInfo";
import { useDeleteUserInfo, useGetAllUserWithId, usePutSelectedUserInfo } from "../api/users";
import {
    startGame as startGameFn,
    nextStep as nextStepFn,
    endGame as endGameFn,
} from "../game/gameCtl";
import type { UserInfo } from "../game/types";


export const useGameControl = (gameId: string) => {
    const userQuery = useGetAllUserWithId();
    const gameQuery = useGetGameInfo(gameId);

    const userMutate = usePutSelectedUserInfo();
    const userDeleteMutate = useDeleteUserInfo();
    const gameMutate = usePutGameInfo(gameId);

    const isPending = userQuery.isPending || gameQuery.isPending;
    const isError = userQuery.isError || gameQuery.isError;
    const data = {
        users: userQuery.data,
        game: gameQuery.data,
    };

    const updateUserInfo = (id: string, userInfo: Partial<UserInfo>) => {
        userMutate.mutate({ ids: [id], userInfo });
    };

    const startGame = () => {
        if (!userQuery.data || !gameQuery.data) return;
        const updateInfo = startGameFn();
        userMutate.mutate({
            ids: userQuery.data.map((user) => user.id),
            userInfo: updateInfo.userInfo,
        });
        gameMutate.mutate(updateInfo.gameInfo);
    };

    const nextStep = () => {
        if (!userQuery.data || !gameQuery.data) return;
        const updateInfo = nextStepFn();
        gameMutate.mutate(updateInfo.gameInfo);
    };

    const endGame = (id: string) => {
        if (!userQuery.data || !gameQuery.data) return;
        const {
            winnerData,
            commonData,
            gameStatus
        } = endGameFn(gameQuery.data, userQuery.data.find((user) => user.id === id));

        if (winnerData) {
            userMutate.mutate({
                ids: [id],
                userInfo: winnerData,
            });
        }

        userMutate.mutate({
            ids: userQuery.data.map((user) => user.id),
            userInfo: commonData,
        });
        gameMutate.mutate(gameStatus);
    };

    const handleDeleteUser = (id: string) => {
        userDeleteMutate.mutate(id)
    };

    return { 
        isPending,
        isError,
        data,
        updateUserInfo,
        startGame,
        nextStep,
        endGame,
        handleDeleteUser,
    };
};
