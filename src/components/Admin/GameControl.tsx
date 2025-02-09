import { useModal } from "../Modal/useModal";
import ModalFrame from "../Modal/ModalFrame";
import GameStartBtn from "../GameCtlBtn/GameStartBtn";
import GameEndBtn from "../GameCtlBtn/GameEndBtn";

const GameControl = () => {
  const { Modal, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal} className="bg-blue-600 px-4 py-2 text-white rounded-md">
        ゲーム制御
      </button>
      <Modal>
        <ModalFrame modalName="ゲーム管理" closeModal={closeModal}>
          <GameStartBtn startGame={() => alert("ゲーム開始")} />
          <GameEndBtn userNames={["Player1", "Player2"]} endGame={(index) => alert(`ゲーム終了: ${index}`)} />
        </ModalFrame>
      </Modal>
    </>
  );
};

export default GameControl;
