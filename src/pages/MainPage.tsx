import { useEffect } from "react";
import { useModal } from "../components/Modal/useModal";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { FIXED_GAME_ID } from "../config";
import { useGame } from "../hook/useGame";
import { useUserContext } from "../hook/useUserContext";
import { deleteUserInfo } from "../api/hoge";
import ActionBtn from "../components/UserManage/ActionBtn";
import ActionModal from "../components/UserManage/ActionModal/ActionModal";
import GameInfo from "../components/GameInfo/GameInfo";
import UserInfo from "../components/Userinformation/UserInfo";
import Loading from "../components/Loading/Loading";
import ReloadButton from "../components/ReloadButton/ReloadButton"; 


const MainPage: React.FC = () => {
    const { id } = useUserContext();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    useEffect(() => {
        if (!id) navigate("/login");
    }, [id, navigate]);

    const {
        data: { user, game },
        isPending,
        isError,
        action
    } = useGame(id as string, FIXED_GAME_ID);
    const { Modal, openModal, closeModal } = useModal();

    useEffect(() => {
        const handleBeforeUnload = async (e: BeforeUnloadEvent) => {
            e.preventDefault();
            if (id) await deleteUserInfo(id as string);
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    });

    const handleReload = () => {
        queryClient.invalidateQueries();
    };

    if (isPending) return <Loading />;
    if (isError) return <div>Error</div>;
    if (!user || !game) return <div>No data</div>;

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center flex-grow w-full">
                <Modal>
                    <ActionModal action={action} closeModal={closeModal} />
                </Modal>
                <div className="bg-white text-gray-900 p-6 sm:p-8 md:p-10 rounded-lg shadow-md text-center 
                                w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[850px] min-h-[75vh] 
                                flex flex-col gap-4 justify-between">
                    
                    <GameInfo potSize={game.pot} rate={game.currentBet} />
                    <UserInfo
                        userName={user.name}
                        chips={user.chip}
                        isPlaying={user.isPlaying}
                    />

                    <div className="flex flex-col items-center gap-4">
                        <ReloadButton onReload={handleReload} />
                        <ActionBtn
                            handleModal={openModal}
                            isPlaying={user.isPlaying && game.isPlaying}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
