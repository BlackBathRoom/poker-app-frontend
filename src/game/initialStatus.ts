import { UserInfo } from "./types";


export const INITIAL_USER_STATUS: Pick<UserInfo, "chip" | "role" | "isPlaying"> = {
    chip: 1000,
    role: "",
    isPlaying: false,
} as const;

