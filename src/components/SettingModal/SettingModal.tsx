import { useState } from "react";

import type { UserInfoWithId } from "../../game/types";
import type { SettingMode } from "./types";
import type { WrapperFn } from "../../hook/useModal";
import Settings from "./Settings";
import ModalFrame from "../Modal/ModalFrame";
import DBChange from "./DBChangeModal/DBChange";
import RateChangeForm from "./RateChangeForm/RateChangeForm";


type Props = {
    users: Pick<UserInfoWithId, "name" | "role">[];
    rate: number;
    updateFn: {
        changeRole: (newDBIndex: number) => void;
        changeRate: (rate: number) => void;
    }
    closeModal: WrapperFn;
};

const SettingModal: React.FC<Props> = ({
    users,
    rate,
    updateFn: { changeRole, changeRate },
    closeModal
}) => {
    const [content, setContent] = useState<React.ReactNode | null>(null);

    const ChangeContent = (content: SettingMode) => {
        if (content === "ChangeDB") {
            setContent(<DBChange users={users} handleSetRole={(i) => closeModal(changeRole, i)} />);
        } else if (content === "ChangeRate") {
            setContent(<RateChangeForm rate={rate} handleSetRate={(rate) => closeModal(changeRate, rate)} />);
        }
    }

    return (
        <ModalFrame modalName="Setting" closeModal={closeModal}>
            {content
                ? content
                : <Settings changeContent={ChangeContent} />
            }
        </ModalFrame>
    );
}

export default SettingModal;
