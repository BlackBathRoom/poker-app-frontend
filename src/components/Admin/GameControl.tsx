import { useModal } from "../Modal/useModal";
import type { UserInfoWithId } from "../../game/types";
import ModalFrame from "../Modal/ModalFrame";
import GameStartBtn from "../GameCtlBtn/GameStartBtn";
import GameEndBtn from "../GameCtlBtn/GameEndBtn";
import NextStepBtn from "../GameCtlBtn/NextStepBtn";


type Props = {
    users: Pick<UserInfoWithId, "id" | "name">[];
    isPlaying: boolean;
    gameControlFn: {
        startGame: () => void;
        nextStep: () => void;
        endGame: (id: string) => void;
    };
};

const GameControl: React.FC<Props> = ({
    users,
    isPlaying,
    gameControlFn: { startGame, nextStep, endGame },
}) => {
    const { Modal, openModal, closeModal } = useModal();
    
    const handleStart = () => {
        startGame();
        closeModal();
    };

    const handleEnd = (id: string) => {
        endGame(id);
        closeModal();
    };

    return (
        <>
        <button 
            onClick={openModal} 
            className="bg-gray-800 hover:bg-gray-600 px-4 py-2 mt-4 text-white rounded-md w-fit mx-auto block">
            ゲーム制御
        </button>
        <Modal>
            <ModalFrame modalName="ゲーム管理" closeModal={closeModal}>
                {isPlaying ? (
                    <NextStepBtn nextStep={nextStep} />
                ): (
                    <GameStartBtn startGame={handleStart} />
                )}
                <GameEndBtn users={users} endGame={handleEnd} />
            </ModalFrame>
        </Modal>
        </>
    );
};

export default GameControl;
