import { useMutation, useQuery } from "@tanstack/react-query"
import { usersKeys } from "./key"
import { fetchAllUserInfo, fetchUserInfo, updateUserInfo } from "./functions"
import { userInfoSelector, allUserInfoSelector } from "./selector";
import { UserInfo } from "../../game/types";
import { queryClient } from "../../main";


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

export const usePutUserInfo = (userId: string) => {
    const mutation = useMutation({
        mutationFn: (userInfo: Partial<UserInfo>) => updateUserInfo(userId, userInfo),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: usersKeys.withId(userId),
            })
        },
    });
    return mutation;
};
