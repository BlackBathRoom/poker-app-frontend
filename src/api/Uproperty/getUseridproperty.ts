import axios from "axios";
import { API_BASE_URL } from "../../config";

const API_URL = `${API_BASE_URL}/users`;

export const getUserproperty = async (
    userId: string
): Promise<{ name?: string; chip?: number } | null> => {
    return axios
        .get<{ name?: string; chip?: number }>(`${API_URL}/${userId}`)
        .then((response) => response.data)
        .catch((error) => {
            console.error("ユーザーのプロパティの取得に失敗しました:", error);
            return null;
        });
};
