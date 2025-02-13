import { useModal } from "../components/Modal/useModal";
import { useNavigate } from "react-router-dom";

import { useUserContext } from "../hook/useUserContext";
import ActionBtn from "../components/UserManage/ActionBtn";
import ActionModal from "../components/UserManage/ActionModal/ActionModal";
import type { ActionType } from "../game/types";
import GameInfo from "../components/GameInfo/GameInfo";
import UserInfo from "../components/Userinformation/UserInfo";
import { useGetUser } from "../api/users";


const MainPage: React.FC = () => {
    const { id, setId } = useUserContext();
    setId("f0691f25-a83a-4090-9b8f-667af15372cc")
    // 開発用ID
    const navigate = useNavigate();
    if (id === null) navigate("/login", { replace: true });

    const { data, isPending, isError } = useGetUser(id as string);

    const { Modal, openModal, closeModal } = useModal();

    const dummyAction = (actionType: ActionType, chip?: number) => {
        console.log(actionType, chip);
    };

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;
    if (!data) return <div>No data</div>;

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center flex-grow w-full">
                <Modal>
                    <ActionModal action={dummyAction} closeModal={closeModal} />
                </Modal>
                <div className="bg-white text-gray-900 p-8 sm:p-10 md:p-12 rounded-lg shadow-md text-center 
                                w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[850px] min-h-[75vh] 
                                flex flex-col gap-6 justify-between">
                    <GameInfo potSize={256} rate={25600} />
                    <UserInfo userName={data.name} chips={data.chip} isPlaying={data.isPlaying} />
                    <ActionBtn handleModal={openModal} isPlaying={true} />
                </div>
            </div>
        </div>
    );
};

export default MainPage;