import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../main";

// ユーザーを強制退出する関数
const kickUser = async (userId: string) => {
    const response = await fetch('/api/kickUser/${userId}', { method: "DELETE" });
    if (!response.ok) throw new Error("ユーザーの強制退出に失敗しました"); 
};

//カスタムフック
export const useKickUser = () => {
    return useMutation({
        mutationFn: kickUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
};