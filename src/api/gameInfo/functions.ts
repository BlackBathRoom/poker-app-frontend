import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

import { API_BASE_URL } from "../../config";
import type { GameData } from "./types";
import type { GameStatus } from "../../game/types";


const URL = `${API_BASE_URL}/gameinfo`;

export const fetchGameInfo = async (gameId: string): Promise<GameData> => {
    const url = `${URL}/${gameId}`;
    const options: AxiosRequestConfig = {
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
    const options: AxiosRequestConfig = {
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

    const options: AxiosRequestConfig = {
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


const _updateGameData = async (userId: string, gameData: Partial<GameData>): Promise<void> => {
    const filteredData: Partial<GameData> = Object.fromEntries(
        Object.entries(gameData).filter(([, value]) => value !== undefined)
    );

    if (Object.keys(filteredData).length === 0) return;

    const url = `${URL}/${userId}`;
    const options: AxiosRequestConfig = {
        url,
        method: "PUT",
        data: filteredData,
    };
    await axios(options);
};

export const updateGameInfo = async (gameId: string, gameStatus: Partial<GameStatus>): Promise<void> => {
    await _updateGameData(
        gameId,
        {
            pot: gameStatus.pot,
            rate: gameStatus.currentBet,
            isplaying: gameStatus.isPlaying
        }
    );
};


export const deleteGameInfo = async (gameId: string): Promise<void> => {
    const url = `${URL}/${gameId}`;
    const options: AxiosRequestConfig = {
        url,
        method: "DELETE",
    };
    await axios(options)
        .catch((err) => {
            throw new Error(err);
        });
};
