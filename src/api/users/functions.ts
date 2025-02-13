import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_BASE_URL } from "../../config";
import type { Role, UserInfo } from "../../game/types"
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


const _updateUserInfo = async (
    userId: string,
    data: Partial<Pick<UserData, "chip" | "role" | "isplaying">>,
    resource: string,
): Promise<void> => {
    const url = `${URL}/${userId}/${resource}`;
    const options: AxiosRequestConfig = {
        url,
        method: "PUT",
        data,
    };
    await axios(options);
};

const updateChip = async (userId: string, chip: number): Promise<void> => {
    await _updateUserInfo(userId, { chip }, "chip");
};

const updateRole = async (userId: string, role: Role | ""): Promise<void> => {
    await _updateUserInfo(userId, { role: role ? role : null }, "role");
};

const updateIsPlaying = async (userId: string, isPlaying: boolean): Promise<void> => {
    await _updateUserInfo(userId, { isplaying: isPlaying }, "isplaying");
};

export const updateUserInfo = async (userId: string, userInfo: Partial<UserInfo>): Promise<void> => {
    if (userInfo.chip !== undefined) await updateChip(userId, userInfo.chip);
    if (userInfo.role !== undefined) await updateRole(userId, userInfo.role);
    if (userInfo.isPlaying !== undefined) await updateIsPlaying(userId, userInfo.isPlaying);
};


export const deleteUserInfo = async (userId: string): Promise<void> => {
    const url = `${URL}/${userId}`;
    const options: AxiosRequestConfig = {
        url,
        method: "DELETE",
    };
    await axios(options);
};
