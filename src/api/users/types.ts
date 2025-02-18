import { Role } from "../../game/types";

export interface UserData {
    id: string;
    name: string;
    chip: number;
    role: Role | null;
    isplaying: boolean;
};
