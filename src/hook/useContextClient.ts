import { type Context, useContext } from "react";


export const useContextClient = <T>(context: Context<T | undefined>): T => {
    const c = useContext(context);
    if (!c) {
        throw new Error("コンテキストが存在しません")
    };
    return c;
};