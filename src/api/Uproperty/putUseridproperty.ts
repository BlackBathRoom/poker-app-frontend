import axios from "axios";
import { API_BASE_URL } from "../../config";
import { Role } from "../../game/types";

const API_URL = `${API_BASE_URL}/users`;


export const putUseridproperty = async (
    userId: string,
    userData: Partial<{ name: string; chip: number; role: Role | null; isPlaying: boolean }>
): Promise<boolean> => {
    return axios
        .patch(`${API_URL}/${userId}`, userData)
        .then(() => true) 
        .catch((error) => {
            throw new Error(`ユーザーのプロパティの更新に失敗しました (${userId}): ${error.message}`);
        });
};


