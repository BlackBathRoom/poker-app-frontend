import type { UserInfoWithId } from "../../../../game/types";
import Btn from "../../../Btn";
import ModalFrame from "../../../Modal/ModalFrame";


type Props = {
    users: Pick<UserInfoWithId, "id" | "name">[];
    endGame: (id: string) => void;
    closeModal: () => void;
};

const WinnerModal: React.FC<Props> = ({ users, endGame, closeModal}) => {
    return (
        <ModalFrame modalName="Result" closeModal={closeModal}>
            <ul className="flex flex-col items-center">
                {users.map((user) => (
                    <li key={user.id} className="text-2xl text-zinc-300 my-2">
                        <Btn
                            onClick={() => endGame(user.id)}
                            className="w-32 h-10 m-auto"
                            bgColor="bg-emerald-300"
                            hoverBgColor="bg-emerald-400"
                        >
                            <span className="text-zinc-900 text-xl font-extrabol p-2">
                                {user.name}
                            </span>
                        </Btn>
                    </li>
                ))}
            </ul>
        </ModalFrame>
    );
};

export default WinnerModal;
