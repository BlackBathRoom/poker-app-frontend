import axios, { AxiosRequestConfig } from "axios";
import { API_BASE_URL } from "../config";


export const updateUserChip = async (userId: string, newChipAmount: number): Promise<number> => {
    const url = `${API_BASE_URL}/users/${userId}/chip`;
    const options: AxiosRequestConfig = {
        url,
        method: "PUT",
        data: { chip: newChipAmount },
    };

    return await axios(options)
        // responseは存在しないので型定義とresを削除
        .then(() => {
            return newChipAmount;
        })
        .catch((err) => {
            throw new Error(err);
        });
};
