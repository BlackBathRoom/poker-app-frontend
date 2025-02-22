import { GameState, UpdateInfo, UserInfo } from "./types";


export const startGame = (): UpdateInfo => {
    return {
        userInfo: { isPlaying: true },
        gameInfo: { isPlaying: true },
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
