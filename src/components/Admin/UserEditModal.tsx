import { useState } from "react";

import type { UserInfo } from "../../game/types";
import ModalFrame from "../Modal/ModalFrame";
import Btn from "../Btn";
import InputForm from "../InputForm";
import KickUserBtn from "./KickUserBtn";
import type { WrapperFn } from "../../hook/useModal";

type Props = {
    userInfo: Pick<UserInfo, "name" | "chip">;
    updateUserInfo: (userInfo: Partial<UserInfo>) => void;
    deleteUser: () => void;
    closeModal: WrapperFn;
};

const UserEditModal: React.FC<Props> = ({
    userInfo,
    updateUserInfo,
    deleteUser,
    closeModal,
}) => {
    const [chips, setChips] = useState(userInfo.chip);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        closeModal(updateUserInfo, { chip: chips })
    };

    return (
        <ModalFrame modalName={`${userInfo.name}の情報を変更`} closeModal={closeModal}>
            <div className="w-full p-3 flex flex-col gap-3 justify-center items-center">
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
                <KickUserBtn deleteUser={() => closeModal(deleteUser)}/>
            </div>
        </ModalFrame>
    );
};

export default UserEditModal;
