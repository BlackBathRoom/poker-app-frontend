import axios from "axios";
import { API_BASE_URL } from "../../config";
import { GameStatus } from "../../game/types";

const API_URL = `${API_BASE_URL}/gameinfo`;
const FIXED_GAME_ID = "e211d6c5-0a0e-4ab3-bb23-4643935d85e7";


export const getGameInfoProperty = async (
    property: keyof GameStatus
): Promise<number | null> => {
    return axios
        .get<GameStatus>(`${API_URL}/${FIXED_GAME_ID}`)
        .then((response) => {
            if (property in response.data) {
                return response.data[property];
            } else {
                console.error(`プロパティ "${property}" は存在しません`);
                return null;
            }
        })
        .catch((error) => {
            console.error("ゲーム情報の取得に失敗しました:", error);
            return null;
        });
};
