import { GameState, UpdateInfo, UserInfo } from "./types";


type BlindUser = {
    sbUser: Pick<UserInfo, "chip">;
    bbUser: Pick<UserInfo, "chip">;
};

export const startGame = (rate: number): BlindUser & UpdateInfo => {
    return {
        sbUser: { chip: rate },
        bbUser: { chip: rate * 2 },
        userInfo: { isPlaying: true },
        gameInfo: { pot: rate * 3, isPlaying: true },
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
