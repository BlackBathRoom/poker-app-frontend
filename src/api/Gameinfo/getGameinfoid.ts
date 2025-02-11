import axios from "axios";
import { API_BASE_URL, FIXED_GAME_ID } from "../../config"; 

const API_URL = `${API_BASE_URL}/gameinfo`;


export const getGameinfo = async (): Promise<{ pot: number; rate: number; isPlaying: boolean } | null> => {
    return axios
        .get<{ pot: number; rate: number; isPlaying: boolean }>(`${API_URL}/${FIXED_GAME_ID}`)
        .then((response) => response.data)
        .catch((error) => {
            console.error("ゲーム情報の取得に失敗しました:", error);
            return null;
        });
};
