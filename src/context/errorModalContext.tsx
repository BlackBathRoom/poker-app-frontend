import { createContext } from "react";

export type ErrorModalContextType = {
    openErrorModal: (error: Error) => void;
};

export const errorModalContext = createContext<ErrorModalContextType | undefined>(undefined);
