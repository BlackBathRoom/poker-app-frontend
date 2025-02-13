import { useQuery } from "@tanstack/react-query"
import { usersKeys } from "./key"
import { fetchAllUserInfo, fetchUserInfo } from "./functions"
import { userInfoSelector, allUserInfoSelector } from "./selector";


export const useGetAllUser = () => {
    const { data, isPending, isError } = useQuery({
        queryKey: usersKeys.all,
        queryFn: () => fetchAllUserInfo(),
        select: allUserInfoSelector,
    });
    return { data, isPending, isError };
};

export const useGetUser = (userId: string) => {
    const { data, isPending, isError } = useQuery({
        queryKey: usersKeys.withId(userId),
        queryFn: () => fetchUserInfo(userId),
        select: userInfoSelector,
    });
    return { data, isPending, isError };
};
