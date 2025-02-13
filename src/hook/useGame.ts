import { ActionType, UserInfo } from "../game/types"


type GameState = {
    rate: number;
    potSize: number;
};

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

export const useGame = () => {
    const action = (actionType: ActionType, gameState: GameState, userState: UserState): UpdateInfo => {
        switch (actionType) {
            case "bet":
                if (userState.amount < gameState.rate) throw new Error("ベット額が足りません");
                return {
                    userInfo: { chip: userState.chip - userState.amount },
                    gameInfo: {
                        rate: userState.amount,
                        potSize: gameState.potSize + userState.amount,
                    },
                }
            case "call":
                if (userState.chip < gameState.rate) throw new Error("コール額が足りません");
                return {
                    userInfo: { chip: userState.chip - userState.amount },
                    gameInfo: {
                        potSize: gameState.potSize + userState.amount,
                    },
                };
            case "raise":
                if (userState.amount <= gameState.rate) throw new Error("レイズ額が足りません");
                return {
                    userInfo: { chip: userState.chip - userState.amount },
                    gameInfo: {
                        rate: userState.amount,
                        potSize: gameState.potSize + userState.amount,
                    },
                };
            case "all-in":
                return {
                    userInfo: { chip: 0 },
                    gameInfo: {
                        rate: gameState.rate,
                        potSize: gameState.potSize + userState.amount,
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
    return { action };
}