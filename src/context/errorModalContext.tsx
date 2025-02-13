import { createContext } from "react";

export type ErrorModalContextTyep = {
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    openErrorModal: (error: Error) => void;
}

export const openErrorModalContext = createContext<ErrorModalContextTyep | undefined>(undefined);
