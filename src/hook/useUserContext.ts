import { UserContext, type UserContextType } from "../context/userContext"
import { useContextClient  } from "./useContextClient"

export const useUserContext = (): UserContextType => {
    return useContextClient(UserContext);
};