import { ActionType, GameStatus, UserInfo } from "./types";


type GameState = Pick<GameStatus, "currentBet" | "pot">;

type UserState = {
    chip: number;
    amount: number;
}

type UpdateUserInfo = Partial<Pick<UserInfo, "chip" | "isPlaying">>;

type UpdateGameInfo = Partial<GameState>;

type UpdateInfo = {
    userInfo: UpdateUserInfo;
    gameInfo: UpdateGameInfo;
};

export const action = (actionType: ActionType, gameState: GameState, userState: UserState): UpdateInfo => {
    switch (actionType) {
        case "bet":
            if (userState.amount < gameState.currentBet) throw new Error("ベット額が足りません");
            return {
                userInfo: { chip: userState.chip - userState.amount },
                gameInfo: {
                    currentBet: userState.amount,
                    pot: gameState.pot + userState.amount,
                },
            }
        case "call":
            if (userState.chip < gameState.currentBet) throw new Error("コール額が足りません");
            return {
                userInfo: { chip: userState.chip - gameState.currentBet },
                gameInfo: {
                    pot: gameState.pot + gameState.currentBet,
                },
            };
        case "raise":
            if (userState.amount <= gameState.currentBet) throw new Error("レイズ額が足りません");
            return {
                userInfo: { chip: userState.chip - userState.amount },
                gameInfo: {
                    currentBet: userState.amount,
                    pot: gameState.pot + userState.amount,
                },
            };
        case "all-in":
            return {
                userInfo: { chip: 0 },
                gameInfo: {
                    currentBet: gameState.currentBet,
                    pot: gameState.pot + userState.amount,
                },
            } ;
        case "fold":
            return {
                userInfo: { isPlaying: false },
                gameInfo: {},
            };
        case "check":
            return {
                userInfo: {},
                gameInfo: {},
            }
        default:
            throw new Error("不正なアクションです");
    };
};
