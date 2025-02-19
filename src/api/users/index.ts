import { useMutation, useQuery } from "@tanstack/react-query"

import { usersKeys } from "./key"
import { fetchAllUserInfo, fetchUserInfo, updateSelectedUserInfo, updateUserInfo } from "./functions"
import { userInfoSelector, allUserInfoSelector, allUserInfoWithIdSelector } from "./selector";
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
        queryKey: usersKeys.id(userId),
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
                queryKey: usersKeys.id(userId),
            })
        },
    });
    return mutation;
};

export const useGetAllUserWithId = () => {
    const { data, isPending, isError } = useQuery({
        queryKey: usersKeys.allWithId(),
        queryFn: () => fetchAllUserInfo(),
        select: allUserInfoWithIdSelector,
    });
    return { data, isPending, isError };
};

type PutSomeUserInfo = {
    ids: string[];
    userInfo: Partial<UserInfo>;
}

export const usePutSelectedUserInfo = () => {
    const mutation = useMutation({
        mutationFn: ({ ids, userInfo }: PutSomeUserInfo) => updateSelectedUserInfo(ids, userInfo),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: usersKeys.allWithId(),
            })
        },
    });
    return mutation;
};
