import type { UserInfo, UserInfoWithId } from "../../game/types";
import type { UserData } from "./types";


export const userInfoSelector = (data: UserData): UserInfo => {
    const info: UserInfo = {
        name: data["name"],
        chip: data["chip"],
        role: data["role"] === null ? "" : data["role"],
        isPlaying: data["isplaying"],
    };
    return info;
};

export const allUserInfoSelector = (data: UserData[]): UserInfo[] => {
    return data.map((data) => userInfoSelector(data));
};

export const allUserInfoWithIdSelector = (data: UserData[]): UserInfoWithId[] => {
    return data.map((data) => ({
        id: data["id"],
        ...userInfoSelector(data),
    }));
};
