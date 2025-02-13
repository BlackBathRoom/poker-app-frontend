import { useQuery } from "@tanstack/react-query"
import { usersKeys } from "./key"
import { fetchAllUserInfo } from "./functions"

export const useGetUsers = () => {
    const { data, isPending, isError } = useQuery({
        queryKey: usersKeys.all,
        queryFn: () => fetchAllUserInfo(),
    });
    return { data, isPending, isError };
};
