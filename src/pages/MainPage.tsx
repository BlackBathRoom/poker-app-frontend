import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { FIXED_GAME_ID } from "../config";
import { useGame } from "../hook/useGame";
import { useModal } from "../hook/useModal";
import { useUserContext } from "../hook/useUserContext";
import ActionBtn from "../components/Main/ActionBtn";
import ActionModal from "../components/Main/ActionModal/ActionModal";
import GameInfo from "../components/GameInfo/GameInfo";
import UserInfoLabel from "../components/Main/UserInfoLabel";
import Loading from "../components/Loading/Loading";
import ReloadButton from "../components/ReloadButton/ReloadButton"; 
import KickUserBtn from "../components/Admin/KickUserBtn";


const MainPage: React.FC = () => {
    const { id, setId } = useUserContext();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    useEffect(() => {
        if (!id) navigate("/login");
    }, [id, navigate]);

    const {
        data: { user, game },
        isPending,
        isError,
        action,
        handleRemove,
    } = useGame(id as string, FIXED_GAME_ID);
    const { Modal, openModal, closeModal } = useModal();

    useEffect(() => {
        const handleBeforeUnload = async (e: BeforeUnloadEvent) => {
            e.preventDefault();
            if (id) Remove()
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    });

    const handleReload = () => {
        queryClient.invalidateQueries();
    };

    const Remove = () => {
        handleRemove();
        setId(null);
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
                <div className="bg-white/50 text-gray-900 p-6 sm:p-8 md:p-10 rounded-lg shadow-md text-center 
                                w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[850px] min-h-[75vh] 
                                flex flex-col gap-4 justify-between items-center">
                    <div className="flex flex-col items-center gap-10">
                        <div className="w-full flex justify-between">
                            <ReloadButton onReload={handleReload} />
                            <KickUserBtn deleteUser={Remove}/>
                        </div>
                        <GameInfo potSize={game.pot} rate={game.currentBet} />
                        <UserInfoLabel
                            userName={user.name}
                            chips={user.chip}
                            isPlaying={user.isPlaying}
                        />
                    </div>
                    <div className="flex flex-col items-center gap-4">
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
