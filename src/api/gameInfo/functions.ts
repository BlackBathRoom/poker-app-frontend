import axios, { AxiosResponse } from "axios";
import { API_BASE_URL } from "../../config";
import { GameData } from "./types";
import { GameStatus } from "../../game/types";


const URL = `${API_BASE_URL}/gameInfo/`;

export const fetchGameInfo = async (gameId: string): Promise<GameData> => {
    const url = `${URL}/${gameId}`;
    const options = {
        url,
        method: "GET",
    };
    return await axios(options)
        .then((res: AxiosResponse<GameData>) => res.data)
        .catch((err) => {
            throw new Error(err);
        });
};


type PostResponse = {
    id: string;
};

export const postGameInfo = async (gameInfo: GameData): Promise<string> => {
    const options = {
        url: URL,
        method: "POST",
        data: gameInfo,
        headers: {
            "Content-Type": "application/json",
        },
    };
    return await axios(options)
        .then((res: AxiosResponse<PostResponse>) => res.data.id)
        .catch((err) => {
            throw new Error(err);
        });
};


export const putGameInfo = async (gameId: string, gameStatus: GameStatus): Promise<void> => {
    const url = `${URL}/${gameId}`;
    const data: GameData = {
        pot: gameStatus.pot,
        rate: gameStatus.currentBet,
        isplaying: gameStatus.isPlaying,
    };

    const options = {
        url,
        method: "PUT",
        data,
        headers: {
            "Content-Type": "application/json",
        },
    };
    await axios(options)
        .catch((err) => {
            throw new Error(err);
        });
};


const _updataGameInfo = async (
    gameId: string,
    data: Partial<GameData>,
    resource: string,
): Promise<void> => {
    const url = `${URL}/${gameId}/${resource}`;
    const options = {
        url,
        method: "PUT",
        data,
        headers: {
            "Content-Type": "application/json",
        },
    };
    await axios(options)
        .catch((err) => {
            throw new Error(err);
        });
};

const updatePot = async (gameId: string, pot: number): Promise<void> => {
    await _updataGameInfo(gameId, { pot }, "pot");
};

const updateCurrentBet = async (gameId: string, currentBet: number): Promise<void> => {
    await _updataGameInfo(gameId, { rate: currentBet }, "rate");
};

const updateIsPlaying = async (gameId: string, isPlaying: boolean): Promise<void> => {
    await _updataGameInfo(gameId, { isplaying: isPlaying }, "isplaying");
};

export const updateGameInfo = async (gameId: string, gameStatus: Partial<GameStatus>): Promise<void> => {
    if (gameStatus.pot !== undefined) await updatePot(gameId, gameStatus.pot);
    if (gameStatus.currentBet !== undefined) await updateCurrentBet(gameId, gameStatus.currentBet);
    if (gameStatus.isPlaying !== undefined) await updateIsPlaying(gameId, gameStatus.isPlaying);
};


export const deleteGameInfo = async (gameId: string): Promise<void> => {
    const url = `${URL}/${gameId}`;
    const options = {
        url,
        method: "DELETE",
    };
    await axios(options)
        .catch((err) => {
            throw new Error(err);
        });
};
