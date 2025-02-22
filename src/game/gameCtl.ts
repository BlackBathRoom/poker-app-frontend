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
    loserData: UpdateInfo["userInfo"];
    gameStatus: UpdateInfo["gameInfo"];
};

export const endGame = (winnerData: UserInfo, gameState: GameState): Return => {
    return {
        winnerData: { chip: winnerData.chip + gameState.pot },
        loserData: { isPlaying: false },
        gameStatus: { currentBet: 0, pot: 0, isPlaying: false },
    };
};
