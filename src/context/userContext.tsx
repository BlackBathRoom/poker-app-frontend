import { createContext } from "react";

export type UserContextType = {
    id: string | null;
    setId: Ract.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);




