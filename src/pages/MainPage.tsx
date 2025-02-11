import { useModal } from "../components/Modal/useModal";
import ActionBtn from "../components/UserManage/ActionBtn";
import ActionModal from "../components/UserManage/ActionModal/ActionModal";
import type { ActionType } from "../game/types";
import GameInfo from "../components/GameInfo/GameInfo";
import UserInfo from "../components/Userinformation/UserInfo"; 
import { useState } from "react";

const MainPage: React.FC = () => {
    const { Modal, openModal, closeModal } = useModal();
    const [userName, setUserName] = useState("プレイヤー1");  
    const [chips, setChips] = useState(1000);  

    const dummyAction = (actionType: ActionType, chip?: number) => {
        console.log(actionType, chip);
    };

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center flex-grow w-full">
                <Modal>
                    <ActionModal action={dummyAction} closeModal={closeModal} />
                </Modal>
                <div className="bg-white text-gray-900 p-8 sm:p-10 md:p-12 rounded-lg shadow-md text-center w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[850px] min-h-[75vh] flex flex-col gap-6 justify-start">
                    <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                        <GameInfo potSize={256} rate={25600} />
                    </div>
                    <UserInfo userName={userName} chips={chips} />
                    <div className="w-full flex justify-center">
                        <ActionBtn handleModal={openModal} isPlaying={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
