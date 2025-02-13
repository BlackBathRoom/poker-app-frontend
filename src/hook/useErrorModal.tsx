import { errorModalContext, ErrorModalContextTyep } from "../context/errorModalContext"
import { useContextClient } from "./useContextClient"

export const useErrorModal = (): ErrorModalContextTyep => {
    return useContextClient(errorModalContext);
};
