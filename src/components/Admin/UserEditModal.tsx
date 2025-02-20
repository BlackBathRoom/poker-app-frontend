import { useState } from "react";
import ModalFrame from "../Modal/ModalFrame";
import Btn from "../Btn";
import { UserInfo } from "../../game/types";
import InputForm from "../InputForm";

type Props = {
    userInfo: Pick<UserInfo, "name" | "chip">;
    updateUserInfo: (userInfo: Partial<UserInfo>) => void;
    closeModal: () => void;
};

const UserEditModal: React.FC<Props> = ({ userInfo, updateUserInfo, closeModal }) => {
    const [chips, setChips] = useState(userInfo.chip);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        updateUserInfo({ chip: chips });
        closeModal();
    };

    return (
        <ModalFrame modalName={`${userInfo.name}の情報を変更`} closeModal={closeModal}>
            <form 
                className="flex flex-col items-center space-y-4 w-full max-w-xs sm:max-w-sm md:max-w-md p-4 text-black"
                onSubmit={handleSubmit}
            >
                <InputForm
                    placeholder="チップ"
                    value={chips}
                    onChange={(e) => setChips(Number(e.target.value))}
                    isNumber
                />
                <Btn type="submit" className="px-4 py-2">更新↻</Btn>
            </form>
        </ModalFrame>
    );
};

export default UserEditModal;
