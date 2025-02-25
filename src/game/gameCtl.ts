import { GameState, UpdateInfo, UserInfo, UserInfoWithId } from "./types";


type BlindUser = {
    sbUser: Pick<UserInfoWithId, "id" | "chip">;
    bbUser: Pick<UserInfoWithId, "id" | "chip">;
};

export const startGame = (users: UserInfoWithId[], rate: number): BlindUser & UpdateInfo | null => {
    const sbUser = users.find((user) => user.role === "SB");
    const bbUser = users.find((user) => user.role === "BB");

    if (!sbUser || !bbUser) return null;

    return {
        sbUser: { id: sbUser.id, chip: sbUser.chip - rate },
        bbUser: { id: bbUser.id, chip: bbUser.chip - rate * 2 },
        userInfo: { isPlaying: true },
        gameInfo: { pot: rate * 3, isPlaying: true, currentBet: rate * 2 },
    };
};

export const nextStep = (): UpdateInfo => {
    return {
        userInfo: {},
        gameInfo: { currentBet: 0 },
    };
};

type Return = {
    winnerData: UpdateInfo["userInfo"];
    commonData: UpdateInfo["userInfo"];
    gameStatus: UpdateInfo["gameInfo"];
};

export const endGame = (gameState: GameState, winnerData?: UserInfo): Return => {
    return {
        winnerData: winnerData ? { chip: winnerData.chip + gameState.pot } : {},
        commonData: { isPlaying: false },
        gameStatus: { currentBet: 0, pot: 0, isPlaying: false },
    };
};
