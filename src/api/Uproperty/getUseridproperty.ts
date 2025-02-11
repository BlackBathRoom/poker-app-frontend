import axios from "axios";
import { API_BASE_URL } from "../../config";
import { UserInfo } from "../../game/types";

const API_URL = `${API_BASE_URL}/users`;

export const getUserproperty = async (
    userId: string
): Promise<Partial<UserInfo>> => {
    return axios
        .get<Partial<UserInfo>>(`${API_URL}/${userId}`)
        .then((response) => response.data)
        .catch((error) => {
            throw new Error(`ユーザーのプロパティの取得に失敗しました (${userId}): ${error.message}`);
        });
};
