import axios, { AxiosResponse, type AxiosRequestConfig } from "axios";
import { API_BASE_URL } from "../config";
import type { UserInfo } from "../game/types";
import { UserData } from "./types";


type Response = {
    id: string;
}

export const postUserInfo = async (userInfo: UserInfo): Promise<string> => {
    const data: UserData = {
        name: userInfo.name,
        chip: userInfo.chip,
        role: userInfo.role === "" ? null : userInfo.role,
        isplaying: userInfo.isPlaying,
    };

    const options: AxiosRequestConfig = {
        url: `${API_BASE_URL}/users/`, 
        method: "POST",
        data,
        headers: {
            "Content-Type": "application/json",
        },
    }

    return await axios(options)
        .then((res: AxiosResponse<Response>) => {
            return res.data.id;
        })
        .catch((err) => {
            throw new Error(err);
        });
}