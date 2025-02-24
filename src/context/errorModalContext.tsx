import { createContext } from "react";

export type ErrorModalContextTyep = {
    openErrorModal: (error: Error) => void;
};

export const errorModalContext = createContext<ErrorModalContextTyep | undefined>(undefined);
