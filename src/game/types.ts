export type Role = "DB" | "SB" | "BB";
export type ActionType = "bet" | "raise" | "call" | "fold" | "check" | "all-in";

export type UserInfo = {
    name: string;
    chip: number;
    role: Role | "";
    isPlaying: boolean;
};

export type UserInfoWithId = {
    id: string
} & UserInfo;

export type GameStatus = {
    pot: number;
    currentBet: number;
    isPlaying: boolean;
};

export type Action = (index: number, action: ActionType, amount?: number) => void;

export type GameState = Pick<GameStatus, "currentBet" | "pot">;

export type UserState = {
    chip: number;
    amount: number;
};

export type UpdateInfo = {
    userInfo: Partial<Pick<UserInfo, "chip" | "isPlaying">>; 
    gameInfo: Partial<GameState>;
};

