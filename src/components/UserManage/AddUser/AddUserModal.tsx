import { useState } from "react";
import ModalFrame from "../../Modal/ModalFrame"
import InputForm from "../../InputForm";

type Props = {
    addUserInfo: (name: string, chip: number) => void;
    closeModal: () => void;
};

const AddUserModal: React.FC<Props> = ({ addUserInfo, closeModal }) => {
    const [name, setName] = useState<string>("");
    const [chip, setChip] = useState<number>(200);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addUserInfo(name, chip);
        console.log("Add User");
        closeModal();
    };

    return (
        <ModalFrame modalName="Add User" closeModal={closeModal}>
            <form onSubmit={handleFormSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-zinc-400">
                        Name
                    </label>
                    <InputForm
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="p-1 rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="chip" className="text-zinc-400">
                        Chip
                    </label>
                    <InputForm
                        onChange={(e) => setChip(Number(e.target.value))}
                        value={chip}
                        className="p-1 rounded-md"
                        isNumber={true}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-slate-700 p-1 rounded-md"
                    >
                        <span className="text-zinc-300 text-xl font-extrabol p-2">
                            Add
                        </span>
                    </button>
                </div>
            </form>
        </ModalFrame>
    );
};

export default AddUserModal;
