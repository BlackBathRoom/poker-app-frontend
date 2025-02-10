import axios from "axios";
import { API_BASE_URL } from "../../config";
import { UserInfo } from "../../game/types"; // types.ts から UserInfo をインポート

const API_URL = `${API_BASE_URL}/users`;


export const getUserInfo = async (
    userId: string | null = null
): Promise<UserInfo[] | UserInfo | null> => {
    const url = userId ? `${API_URL}/${userId}` : API_URL;

    return axios
        .get<UserInfo[] | UserInfo>(url)
        .then((response) => response.data)
        .catch((error) => {
            console.error("ユーザー情報の取得に失敗しました:", error);
            return null;
        });
};
