import { errorModalContext, type ErrorModalContextType } from "../context/errorModalContext"
import { useContextClient } from "./useContextClient"

export const useErrorModal = (): ErrorModalContextType => {
    return useContextClient(errorModalContext);
};
