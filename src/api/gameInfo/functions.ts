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