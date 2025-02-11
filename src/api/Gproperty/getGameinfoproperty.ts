import axios from "axios";
import { API_BASE_URL, FIXED_GAME_ID } from "../../config"; 
import { GameStatus } from "../../game/types";

const API_URL = `${API_BASE_URL}/gameinfo`;

export const getGameInfoProperty = async (property: keyof GameStatus): Promise<number> => {
    return axios
        .get<GameStatus>(`${API_URL}/${FIXED_GAME_ID}`)
        .then((response) => {
            if (property in response.data) {
                return response.data[property];
            } else {
                throw new Error(`プロパティ "${property}" は存在しません`);
            }
        })
        .catch((error) => {
            throw new Error(`ゲーム情報の取得に失敗しました: ${error.message}`);
        });
};

