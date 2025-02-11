import axios from "axios";
import { API_BASE_URL } from "../../config";

const API_URL = `${API_BASE_URL}/users`;

export const deleteUserid = async (userId: string): Promise<void> => {
    return axios
        .delete(`${API_URL}/${userId}`)
        .then(() => undefined) 
        .catch((error) => {
            throw new Error(`ユーザーID (${userId}) の削除に失敗しました: ${error.message}`);
        });
};
