import React from "react";

import { useModal } from "../../hook/useModal"; 
import type { UserInfo } from "../../game/types";
import UserEditModal from "./UserEditModal";


type Props = {
    userInfo: Pick<UserInfo, "name" | "chip">;
    updateUserInfo: (userInfo: Partial<UserInfo>) => void;
    deleteUser: () => void;
};

const UserEdit: React.FC<Props> = ({
    userInfo,
    updateUserInfo,
    deleteUser,
}) => {
    const { Modal, openModal, closeModal } = useModal();

    return (
        <>
        <img 
            src="/Edit_w.svg"  
            alt="ユーザー情報変更"
            onClick={() => openModal()} 
            className="fill-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 cursor-pointer shadow-none hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]  transition-shadow duration-300 rounded"
        />
        <Modal>
            <UserEditModal
                userInfo={userInfo}
                updateUserInfo={updateUserInfo}
                deleteUser={deleteUser}
                closeModal={closeModal}
            />
        </Modal>
        </>
    );
};

export default UserEdit;
