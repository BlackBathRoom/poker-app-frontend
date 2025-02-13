import { createContext } from "react";

export type ErrorModalContextTyep = {
    setError: React.Dispatch<React.SetStateAction<Error | null>>;
    openErrorModal: (error: Error) => void;
}

export const errorModalContext = createContext<ErrorModalContextTyep | undefined>(undefined);
