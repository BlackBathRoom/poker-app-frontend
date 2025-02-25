import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { USER_INFO_FETCH_INTERVAL, USERS_INFO_FETCH_INTERVAL } from "../constant";
import { usersKeys } from "./key"
import { deleteUserInfo, fetchAllUserInfo, fetchUserInfo, updateSelectedUserInfo, updateUserInfo } from "./functions"
import { userInfoSelector, allUserInfoSelector, allUserInfoWithIdSelector } from "./selector";
import type { UserInfo } from "../../game/types";


export const useGetAllUser = () => {
    const { data, isPending, isError } = useQuery({
        queryKey: usersKeys.all,
        queryFn: () => fetchAllUserInfo(),
        select: allUserInfoSelector,
        refetchInterval: USERS_INFO_FETCH_INTERVAL,
    });
    return { data, isPending, isError };
};

export const useGetUser = (userId: string) => {
    const { data, isPending, isError } = useQuery({
        queryKey: usersKeys.id(userId),
        queryFn: () => fetchUserInfo(userId),
        select: userInfoSelector,
        refetchInterval: USER_INFO_FETCH_INTERVAL,
    });
    return { data, isPending, isError };
};

export const usePutUserInfo = (userId: string) => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (userInfo: Partial<UserInfo>) => updateUserInfo(userId, userInfo),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: usersKeys.id(userId),
            });
        },
    });
    return mutation;
};

export const useGetAllUserWithId = () => {
    const { data, isPending, isError } = useQuery({
        queryKey: usersKeys.allWithId(),
        queryFn: () => fetchAllUserInfo(),
        select: allUserInfoWithIdSelector,
        refetchInterval: USERS_INFO_FETCH_INTERVAL,
    });
    return { data, isPending, isError };
};

type PutSomeUserInfo = {
    ids: string[];
    userInfo: Partial<UserInfo>;
}

export const usePutSelectedUserInfo = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: ({ ids, userInfo }: PutSomeUserInfo) => updateSelectedUserInfo(ids, userInfo),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: usersKeys.allWithId(),
            });
        },
    });
    return mutation;
};

export const useDeleteUserInfo = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (userId: string) => deleteUserInfo(userId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: usersKeys.allWithId(),
            });
        },
    });
    return mutation;
};
