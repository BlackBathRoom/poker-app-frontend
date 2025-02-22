import { useModal } from "../components/Modal/useModal";
import { useNavigate } from "react-router-dom";

import { FIXED_GAME_ID } from "../config";
import { useGame } from "../hook/useGame";
import { useUserContext } from "../hook/useUserContext";
import ActionBtn from "../components/UserManage/ActionBtn";
import ActionModal from "../components/UserManage/ActionModal/ActionModal";
import GameInfo from "../components/GameInfo/GameInfo";
import UserInfo from "../components/Userinformation/UserInfo";
import Loading from "../components/Loading/Loading";


const MainPage: React.FC = () => {
    const { id } = useUserContext();
    const navigate = useNavigate();
    if (id === null) navigate("/login", { replace: true });

    const {
        data: { user, game },
        isPending,
        isError,
        action 
    } = useGame(id as string, FIXED_GAME_ID);
    const { Modal, openModal, closeModal } = useModal();

    if (isPending) return <Loading />;
    if (isError) return <div>Error</div>;
    if (!user || !game) return <div>No data</div>;

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center flex-grow w-full">
                <Modal>
                    <ActionModal action={action} closeModal={closeModal} />
                </Modal>
                <div className="bg-white text-gray-900 p-8 sm:p-10 md:p-12 rounded-lg shadow-md text-center 
                                w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[850px] min-h-[75vh] 
                                flex flex-col gap-6 justify-between">
                    <GameInfo potSize={game.pot} rate={game.currentBet} />
                    <UserInfo
                        userName={user.name}
                        chips={user.chip}
                        isPlaying={user.isPlaying}
                    />
                    <ActionBtn
                        handleModal={openModal}
                        isPlaying={user.isPlaying && game.isPlaying}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
