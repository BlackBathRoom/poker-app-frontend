import { useState } from "react";

import { errorModalContext } from "../../context/errorModalContext";
import { useModal } from "../Modal/useModal";
import ModalFrame from "../Modal/ModalFrame";


type Props = {
    children: React.ReactNode;
};

const ErrorModalContextProvider: React.FC<Props> = ({ children }) => {
    const { Modal, openModal, closeModal } = useModal();
    const [error, setError] = useState<Error | null>(null);
    
    return (
        <errorModalContext.Provider value={{ setError, openErrorModal: openModal }}>
            {children}
            <Modal>
                <ModalFrame modalName="Oops!" closeModal={closeModal}>
                    <span className="text-rose-400 text-3xl font-extrabold">
                        {error?.message}
                    </span>
                </ModalFrame>
            </Modal>
        </errorModalContext.Provider>
    );
};

export default ErrorModalContextProvider;
