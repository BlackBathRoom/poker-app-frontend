import { UserContext, type UserContextType } from "../context/userContext"
import { useContextClient  } from "./useContextClient"

export const useUserContect = (): UserContextType => {
    return useContextClient(UserContext);
};