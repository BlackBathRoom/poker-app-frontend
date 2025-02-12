import { UserInfo } from "./types";

export const INITIAL_STATUS: Pick<UserInfo, "chip" | "role" | "isPlaying"> = {
    chip: 1000,
    role: "",
    isPlaying: false,
};
