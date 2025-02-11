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
      <img 
        src="../../../public/Edit.png"  
        alt="ユーザー情報変更"
        onClick={openModal} 
        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-15 lg:h-15 cursor-pointer"
      />

      <Modal>
        <ModalFrame modalName="ユーザー編集" closeModal={closeModal}>
          <div className="flex flex-col space-y-2">
            <input 
              className="p-2 border" 
              placeholder="名前" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <input 
              className="p-2 border" 
              type="number" 
              placeholder="チップ" 
              value={chips} 
              onChange={(e) => setChips(Number(e.target.value))} 
            />
            <Btn onClick={handleSubmit}>更新</Btn>
          </div>
        </ModalFrame>
      </Modal>
    </>
  );
};

export default UserEdit;
