import React, { useEffect, useRef, useState } from "react"
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
} from "body-scroll-lock";


export type WrapperFn = <T extends readonly unknown[]>(fn?: (...args: T) => void, ...args: T) => void;

type ModalProps = {
    children: React.ReactNode;
};

type Return = {
    Modal: React.FC<ModalProps>;
    openModal: WrapperFn;
    closeModal: WrapperFn;
};

export const useModal = (): Return => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (modalRef.current === null) return;

        if (isVisible) {
            disableBodyScroll(modalRef.current);
        } else {
            enableBodyScroll(modalRef.current);
        }

        return () => clearAllBodyScrollLocks();
    }, [isVisible, modalRef]);

    const openModal: WrapperFn = (onOpen, ...args) => {
        if (onOpen) onOpen(...args);
        setIsVisible(true);
    };

    const closeModal: WrapperFn = (onClose, ...args) => {
        if (onClose) onClose(...args);
        setIsVisible(false);
    }

    const Modal: React.FC<ModalProps> = ({ children }) => {
        const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
            if (e.target === e.currentTarget) {
                closeModal();
            }
        };

        return (
            <div ref={modalRef}>
                {isVisible && (
                    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-slate-800/50">
                        <div
                        className="flex w-full h-full items-center justify-center"
                        onClick={(e) => handleOverlayClick(e)}
                        >
                            {children}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return { Modal, openModal, closeModal };
};
