import { useState } from "react";
import { useKickUser } from "../../hook/useKickUser";
import type { UserInfoWithId } from "../../game/types";

type Props = {
    users: UserInfoWithId[];
};

const KickUserBtn: React.FC<Props> = ({ users }) => {
    const [selectedUser, setSelectedUser] = useState<string | null>(null);
    const { mutate: kickUser, isPending } = useKickUser();


    const handleKick = () => {
        if (!selectedUser) return;
        kickUser(selectedUser);
    };

    return (
        <div className="p-4 bg-red-900 rounded-md text-white">
            <h2 className="text-xl text-center mb-2">ユーザー強制退出</h2>
            <select
                value={selectedUser || ""}
                onChange={(e) => setSelectedUser(e.target.value)}
                className="p-2 w-full bg-gray-700 text-white"
            >
                <option value="">ユーザーを選択</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
            <button
                onClick={handleKick}
                disabled={!selectedUser || isPending}
                className="mt-2 p-2 w-full bg-red-600 hover:bg-red-500 desabled:bg-gray-600 rounded-md"
            >
                {isPending ? "処理中..." : "強制退出"}
            </button>
        </div>
    );
};

export default KickUserBtn;

