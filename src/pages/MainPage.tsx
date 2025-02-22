import { useModal } from "../components/Modal/useModal";
import { useNavigate } from "react-router-dom";

import { FIXED_GAME_ID } from "../config";
import { useGetUser, usePutUserInfo } from "../api/users";
import { useGetGameInfo, usePutGameInfo } from "../api/gameInfo";
import { useGame } from "../hook/useGame";
import { useUserContext } from "../hook/useUserContext";
import type { ActionType } from "../game/types";
import ActionBtn from "../components/UserManage/ActionBtn";
import ActionModal from "../components/UserManage/ActionModal/ActionModal";
import GameInfo from "../components/GameInfo/GameInfo";
import UserInfo from "../components/Userinformation/UserInfo";
import Loading from "../components/Loading/Loading";


const MainPage: React.FC = () => {
    const { id } = useUserContext();
    const navigate = useNavigate();
    if (id === null) navigate("/login", { replace: true });

    const userQuery = useGetUser(id as string);
    const gameQuery = useGetGameInfo(FIXED_GAME_ID);
    const userMutate = usePutUserInfo(id as string);
    const gameMutate = usePutGameInfo(FIXED_GAME_ID);

    const { Modal, openModal, closeModal } = useModal();
    const game = useGame();

    const action = (actionType: ActionType, amount: number) => {
        if (!userQuery.data || !gameQuery.data) throw new Error("ユーザー情報が取得できません");
       const update = game.action(
            actionType,
            { currentBet: gameQuery.data.currentBet, pot: gameQuery.data.pot },
            { chip: userQuery.data.chip, amount },
        );
        userMutate.mutate(update.userInfo);
        gameMutate.mutate(update.gameInfo);
    };

    if (userQuery.isPending || gameQuery.isPending) return <Loading />;
    if (userQuery.isError || userQuery.isError) return <div>Error</div>;
    if (!userQuery.data || !gameQuery.data) return <div>No data</div>;

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center flex-grow w-full">
                <Modal>
                    <ActionModal action={action} closeModal={closeModal} />
                </Modal>
                <div className="bg-white text-gray-900 p-8 sm:p-10 md:p-12 rounded-lg shadow-md text-center 
                                w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[850px] min-h-[75vh] 
                                flex flex-col gap-6 justify-between">
                    <GameInfo potSize={gameQuery.data.pot} rate={gameQuery.data.currentBet} />
                    <UserInfo
                        userName={userQuery.data.name}
                        chips={userQuery.data.chip}
                        isPlaying={userQuery.data.isPlaying}
                    />
                    <ActionBtn handleModal={openModal} isPlaying={true} />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
