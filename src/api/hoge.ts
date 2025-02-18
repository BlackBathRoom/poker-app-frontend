import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_BASE_URL } from "../config";
import type {  UserInfo } from "../game/types"
import type { UserData } from "./types";


const URL = `${API_BASE_URL}/users`;

type GetResponse<T> = T extends string ? UserData : UserData[];

const _fetchUserInfo = async (userId?: string): Promise<UserData[]> => {
    const url = `${URL}/${userId? userId : ""}`;
    const options: AxiosRequestConfig = {
        url,
        method: "GET"
    };

    return await axios(options)
        .then((res: AxiosResponse<GetResponse<typeof userId>>) => {
            if (Array.isArray(res.data)) {
                return res.data;
            } else {
                return [res.data];
            }
        })
        .catch((err) => {
            throw new Error(err);
        });
};

export const fetchUserInfo = async (userId: string): Promise<UserData> => {
    const data = await _fetchUserInfo(userId);
    return data[0];
};

export const fetchAllUserInfo = async (): Promise<UserData[]> => {
    return await _fetchUserInfo();
};


type PostResponse = {
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
        .then((res: AxiosResponse<PostResponse>) => {
            return res.data.id;
        })
        .catch((err) => {
            throw new Error(err);
        });
};


export const updateUserInfo = async (userId: string, userInfo: Partial<UserInfo>): Promise<void> => {

    const filteredData: Partial<UserInfo> = Object.fromEntries(
        Object.entries(userInfo).filter(([, value]) => value !== null && value !== undefined)
    );

    if (Object.keys(filteredData).length === 0) {
        return;
    }

    const url = `${URL}/${userId}`;
    const options: AxiosRequestConfig = {
        url,
        method: "PUT",
        data: filteredData,
    };

    await axios(options);
};


export const deleteUserInfo = async (userId: string): Promise<void> => {
    const url = `${URL}/${userId}`;
    const options: AxiosRequestConfig = {
        url,
        method: "DELETE",
    };
    await axios(options);
};
