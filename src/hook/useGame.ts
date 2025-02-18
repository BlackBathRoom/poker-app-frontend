import { action as actionFunc } from "../game/action";


export const useGame = () => {
    const action = actionFunc;
    return { action };
};
