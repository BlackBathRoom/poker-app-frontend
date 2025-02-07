import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_BASE_URL } from "../config";
import { UserInfo } from "../game/types";
import { UserData } from "./types";

type Response<T> = T extends string ? UserData : UserData[];

const pickUserInfo = (data: UserData): UserInfo => {
    return {
        name: data["name"],
        chip: data["chip"],
        role: data["role"] === null ? "" : data["role"],
        isPlaying: data["isplaying"],
    };
};

export const updateUserChip = async (userId: string, newChipAmount: number): Promise<UserInfo> => {
    const url = `${API_BASE_URL}/users/${userId}/chip`;
    const options: AxiosRequestConfig = {
        url,
        method: "PUT",
        data: { chip: newChipAmount },
    };

    return await axios(options)
        .then((res: AxiosResponse<Response<typeof userId>>) => {
            return pickUserInfo(res.data);
        })
        .catch((err) => {
            throw new Error(err);
        });
};
