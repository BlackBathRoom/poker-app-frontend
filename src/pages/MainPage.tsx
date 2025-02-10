import { useModal } from "../components/Modal/useModal";
import ActionBtn from "../components/UserManage/ActionBtn";
import ActionModal from "../components/UserManage/ActionModal/ActionModal";
import type { ActionType } from "../game/types";
import GameInfo from "../components/GameInfo/GameInfo";
import { useState } from "react";

const MainPage: React.FC = () => {
    const { Modal, openModal, closeModal } = useModal();

    // ユーザー情報の仮データ
    const [userName, setUserName] = useState("プレイヤー1");  
    const [chips, setChips] = useState(1000);  

    const dummyAction = (actionType: ActionType, chip?: number) => {
        console.log(actionType, chip);
    };

    return (
        <div className="min-h-screen flex flex-col items-center">
            <header className="w-full py-4 bg-black text-center text-2xl font-bold tracking-wider text-white">
                POKER
            </header>

            <div className="flex flex-col items-center w-full">
                <ActionBtn handleModal={openModal} isPlaying={true} />

                <Modal>
                    <ActionModal action={dummyAction} closeModal={closeModal} />
                </Modal>

                <GameInfo potSize={256} rate={25600} />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 p-6 sm:p-8 md:p-10 rounded-lg shadow-md text-center w-[85%] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[800px]">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">プレイヤー情報</h2>
                    <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                        ユーザー名: <span className="font-bold text-indigo-600">{userName}</span>
                    </p>
                    <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                        チップ数: <span className="font-bold text-green-500">{chips} 枚</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
