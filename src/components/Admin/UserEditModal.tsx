import { useState } from "react";
import ModalFrame from "../Modal/ModalFrame";
import Btn from "../Btn";

type Props = {
  closeModal: () => void;
};

const UserEditModal: React.FC<Props> = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [chips, setChips] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    await fetch("/api/updateUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 1, name, chips }),
    });

    closeModal();
  };

  return (
    <ModalFrame modalName="ユーザー情報変更" closeModal={closeModal}>
      <form 
        className="flex flex-col items-center space-y-4 w-full max-w-xs sm:max-w-sm md:max-w-md p-4 text-black"
        onSubmit={handleSubmit}
      >
        <input 
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          className="w-full p-2 border border-gray-300 rounded-md"
          type="number"
          placeholder="チップ"
          value={chips}
          onChange={(e) => setChips(Number(e.target.value))}
        />
        <Btn type="submit">更新↻</Btn>
      </form>
    </ModalFrame>
  );
};

export default UserEditModal;
