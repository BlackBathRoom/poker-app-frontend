import { useModal } from "../Modal/useModal";
import UserEditModal from "./UserEditModal";

const UserEdit = () => {
  const { Modal, openModal, closeModal } = useModal();

  return (
    <>
      <img 
        src="/Edit_w.svg"  
        alt="ユーザー情報変更"
        onClick={openModal} 
        className="fill-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 cursor-pointer "
      />

      <Modal>
        <UserEditModal closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default UserEdit;
