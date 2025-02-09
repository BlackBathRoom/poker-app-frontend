import { useState } from "react";
import { useModal } from "../Modal/useModal";
import ModalFrame from "../Modal/ModalFrame";
import Btn from "../Btn";

const UserEdit = () => {
  const { Modal, openModal, closeModal } = useModal();
  const [name, setName] = useState("");
  const [chips, setChips] = useState(0);

  const handleSubmit = async () => {
    await fetch("/api/updateUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 1, name, chips }),
    });
    closeModal();
  };

  return (
    <>
      <button onClick={openModal} className="bg-green-600 px-4 py-2 text-white rounded-md">
        ユーザー情報変更
      </button>
      <Modal>
        <ModalFrame modalName="ユーザー編集" closeModal={closeModal}>
          <div className="flex flex-col space-y-2">
            <input className="p-2 border" placeholder="名前" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="p-2 border" type="number" placeholder="チップ" value={chips} onChange={(e) => setChips(Number(e.target.value))} />
            <Btn onClick={handleSubmit}>更新</Btn>
          </div>
        </ModalFrame>
      </Modal>
    </>
  );
};

export default UserEdit;
