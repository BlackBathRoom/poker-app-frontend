import axios from "axios";
import { API_BASE_URL } from "../../config";
import { Role } from "../../game/types";

const API_URL = `${API_BASE_URL}/users`;

export const getUserproperty = async (
    userId: string
): Promise<{ id?: string, name?: string, chip?: number, role?: Role | null, isplaying?: boolean } | null> => {
    return axios
        .get<{ id?:string, name?: string, chip?: number, role?: Role | null, isplaying?:boolean }>(`${API_URL}/${userId}`)
        .then((response) => response.data)
        .catch((error) => {
            console.error("ユーザーのプロパティの取得に失敗しました:", error);
            return null;
        });
};
