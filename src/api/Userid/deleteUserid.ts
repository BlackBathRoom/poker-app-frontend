import axios from "axios";
import { API_BASE_URL } from "../../config";

const API_URL = `${API_BASE_URL}/users`;

export const deleteUserid = async (userId: string): Promise<boolean> => {
    return axios
        .delete(`${API_URL}/${userId}`)
        .then(() => true)
        .catch((error) => {
            console.error(`ユーザーID (${userId}) の削除に失敗しました:`, error);
            return false;
        });
};

