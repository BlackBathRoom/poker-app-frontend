import axios from "axios";
import { API_BASE_URL } from "../../config";

const API_URL = `${API_BASE_URL}/gameinfo`;

export const deleteGameinfoid = async (gameId: string): Promise<void> => {
    return axios
        .delete(`${API_URL}/${gameId}`)
        .then(() => undefined)
        .catch(() => {
            throw new Error(`ゲーム情報の削除に失敗しました: ${gameId}`);
        });
};


