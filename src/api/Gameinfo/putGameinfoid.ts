import axios from "axios";
import { API_BASE_URL } from "../../config";

const API_URL = `${API_BASE_URL}/gameinfo`;

export const putGameinfo = async (
    gameId: string,
    gameData: Partial<{ pot: number; rate: number; isPlaying: boolean }>
): Promise<boolean> => {
    return axios
        .put(`${API_URL}/${gameId}`, gameData)
        .then(() => true) 
        .catch((error) => {
            throw new Error(`ゲーム情報の更新に失敗しました: ${error.message}`);
        });
};