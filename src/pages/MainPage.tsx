import { useModal } from "../components/Modal/useModal";
import ActionBtn from "../components/UserManage/ActionBtn";
import ActionModal from "../components/UserManage/ActionModal/ActionModal";
import type { ActionType } from "../game/types";
import GameInfo from "../components/GameInfo/GameInfo";
import { useState, useEffect } from "react";

const MainPage: React.FC = () => {
    const { Modal, openModal, closeModal } = useModal();

    // ユーザー情報の仮データ
    const [userName, setUserName] = useState("プレイヤー1");  
    const [chips, setChips] = useState(1000);  

    const dummyAction = (actionType: ActionType, chip?: number) => {
        console.log(actionType, chip);
    };

    useEffect(() => {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div className="min-h-screen w-screen flex flex-col items-center justify-center overflow-hidden">

            <header className="w-full py-4 bg-black text-center text-2xl font-bold tracking-wider text-white">
                POKER
            </header>

            <div className="flex flex-col items-center justify-center flex-grow w-full">
                <Modal>
                    <ActionModal action={dummyAction} closeModal={closeModal} />
                </Modal>


                <div className="bg-white text-gray-900 p-8 sm:p-10 md:p-12 rounded-lg shadow-md text-center w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[850px] h-[75vh] flex flex-col gap-8 justify-between">
                    

                    <div className="flex justify-around w-full">
                        <GameInfo potSize={256} rate={25600} />
                    </div>


                    <div className="mt-[-40px] sm:mt-[-60px] md:mt-[-80px] lg:mt-[-100px]">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">プレイヤー情報</h2>
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                            ユーザー名: <span className="font-bold text-indigo-600">{userName}</span>
                        </p>
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                            チップ数: <span className="font-bold text-green-500">{chips} 枚</span>
                        </p>
                    </div>


                    <div className="w-full flex justify-center">
                        <ActionBtn handleModal={openModal} isPlaying={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
