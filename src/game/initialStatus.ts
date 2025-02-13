import { GameStatus, UserInfo } from "./types";


export const INITIAL_USER_STATUS: Pick<UserInfo, "chip" | "role" | "isPlaying"> = {
    chip: 1000,
    role: "",
    isPlaying: false,
} as const;

export const INITIAL_GAME_STATUS: GameStatus = {
    pot: 0,
    currentBet: 0,
    isPlaying: false,
} as const;
