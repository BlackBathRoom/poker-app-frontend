import { useModal } from "../Modal/useModal";
import ModalFrame from "../Modal/ModalFrame";
import GameStartBtn from "../GameCtlBtn/GameStartBtn";
import GameEndBtn from "../GameCtlBtn/GameEndBtn";
import { UserInfoWithId } from "../../game/types";


type Props = {
    users: Pick<UserInfoWithId, "id" | "name">[];
    startGame: () => void;
    endGame: (id: string) => void;
};

const GameControl: React.FC<Props> = ({
    users,
    startGame,
    endGame,
}) => {
    const { Modal, openModal, closeModal } = useModal();

    return (
        <>
        <button 
            onClick={openModal} 
            className="bg-gray-800 hover:bg-gray-600 px-4 py-2 mt-4 text-white rounded-md w-fit mx-auto block">
            ゲーム制御
        </button>
        <Modal>
            <ModalFrame modalName="ゲーム管理" closeModal={closeModal}>
                <GameStartBtn startGame={startGame} />
                <GameEndBtn users={users} endGame={endGame} />
            </ModalFrame>
        </Modal>
        </>
    );
};

export default GameControl;
