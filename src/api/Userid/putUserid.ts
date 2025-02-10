import axios from "axios";
import { API_BASE_URL } from "../../config";
import { Role } from "../../game/types";

const API_URL = `${API_BASE_URL}/users`;


export const putUserid = async (
    userId: string,
    userData: Partial<{ name: string, chip: number, role: Role | null, isplaying: boolean }>
): Promise<boolean> => {
    return axios
        .put(`${API_URL}/${userId}`, userData)
        .then(() => true)
        .catch((error) => {
            console.error("ユーザー情報の更新に失敗しました:", error);
            return false;
        });
};
