import type { GameStatus } from "../../game/types";
import type { GameData } from "./types";


export const gameInfoSelector = (data: GameData): GameStatus => {
    const status: GameStatus = {
        pot: data.pot,
        currentBet: data.rate,
        isPlaying: data.isplaying,
    };
    return status;
};
