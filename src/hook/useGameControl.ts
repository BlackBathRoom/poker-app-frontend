import { useGetGameInfo, usePutGameInfo } from "../api/gameInfo";
import { useDeleteUserInfo, useGetAllUserWithId, usePutSelectedUserInfo } from "../api/users";
import { useErrorModal } from "./useErrorModal";
import {
    startGame as startGameFn,
    nextStep as nextStepFn,
    endGame as endGameFn,
} from "../game/gameCtl";
import { changeRole as changeRoleFn } from "../game/changeRole";
import type { GameStatus, UserInfo } from "../game/types";


export const useGameControl = (gameId: string) => {
    const userQuery = useGetAllUserWithId();
    const gameQuery = useGetGameInfo(gameId);

    const userMutate = usePutSelectedUserInfo();
    const userDeleteMutate = useDeleteUserInfo();
    const gameMutate = usePutGameInfo(gameId);

    const { openErrorModal } = useErrorModal();

    const isPending = userQuery.isPending || gameQuery.isPending;
    const isError = userQuery.isError || gameQuery.isError;
    const data = {
        users: userQuery.data,
        game: gameQuery.data,
    };

    const updateUserInfo = (id: string, userInfo: Partial<UserInfo>) => {
        userMutate.mutate({ ids: [id], userInfo });
    };

    const updateGameInfo = (gameStatus: Partial<GameStatus>) => {
        gameMutate.mutate(gameStatus);
    };

    const startGame = () => {
        if (!userQuery.data || !gameQuery.data) return;
        const updateInfo = startGameFn(userQuery.data, gameQuery.data.currentBet);
        if (!updateInfo) {
            openErrorModal(new Error("ゲームを開始できません"));
            return;
        }

        updateUserInfo(updateInfo.sbUser.id, { chip: updateInfo.sbUser.chip });
        updateUserInfo(updateInfo.bbUser.id, { chip: updateInfo.bbUser.chip });
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

        const newDBIndex = userQuery.data.findIndex((user) => user.role === "DB");
        changeRole(newDBIndex + 1);
    };

    const handleDeleteUser = (id: string) => {
        userDeleteMutate.mutate(id)
    };
    
    const changeRole = (newDBIndex: number) => {
        if (!data.users) return;
        const prevUsers = data.users.map((user) => user.role);
        const newUsers = changeRoleFn({ users: prevUsers, newDBIndex });
        const reWriteUsers = data.users.map((user, i) => {
            if (user.role !== newUsers[i]) {
                return { id: user.id, role: newUsers[i] };
            };
        }).filter((user) => user !== undefined);

        reWriteUsers.forEach((user) => {
            userMutate.mutate({
                ids: [user.id],
                userInfo: { role: user.role },
            });
        });
    };

    return { 
        isPending,
        isError,
        data,
        updateUserInfo,
        updateGameInfo,
        startGame,
        nextStep,
        endGame,
        handleDeleteUser,
        changeRole,
    };
};
