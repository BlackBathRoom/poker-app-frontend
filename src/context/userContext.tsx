import { createContext } from "react";

export type UserContextType = {
    id: string | null;
    setId: React.Dispatch<React.SetStateAction<string | null>>;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);
