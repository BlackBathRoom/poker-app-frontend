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
        document.documentElement.style.overflow = "clip"; // スクロールを防ぐ
        document.body.style.overflow = "clip";
        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">

            <header className="w-full py-4 bg-black text-center text-2xl font-bold tracking-wider text-white">
                POKER
            </header>

            <div className="flex flex-col items-center justify-center flex-grow w-full">
                <Modal>
                    <ActionModal action={dummyAction} closeModal={closeModal} />
                </Modal>

                {/* ここを変更せずに維持 */}
                <div className="bg-white text-gray-900 p-8 sm:p-10 md:p-12 rounded-lg shadow-md text-center w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[850px] min-h-[75vh] flex flex-col gap-8 justify-between">
                    
                    {/* Pot と Rate（フォントサイズを最大化） */}
                    <div className="flex justify-around w-full">
                        <div className="text-center">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black">Pot</h3>
                            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">256</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black">Rate</h3>
                            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">25600</p>
                        </div>
                    </div>

                    <div className="mt-[-50px] sm:mt-[-70px] md:mt-[-90px] lg:mt-[-110px]">
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
