import type { UserInfo, UserInfoWithId } from "../../game/types";
import UserEdit from "./UserEdit";


type Props = {
    users: UserInfoWithId[];
    updateUserInfo: (id: string, userInfo: Partial<UserInfo>) => void;
    deleteUser: (id: string) => void; 
};

const UserList: React.FC<Props> = ({ users, updateUserInfo, deleteUser }) => {
    return (
        <div className="w-full p-4 bg-gray-800 rounded-md flex flex-col gap-2 max-h-[85%]">
            <h2 className="text-white text-xl text-center mb-2">ユーザー</h2>
            <ul className="flex flex-col w-full gap-2 overflow-y-auto">
                {users.map((user) => (
                    <li
                        key={user.id} 
                        className="flex justify-between w-full px-2 py-2 text-white sm:px-10 sm:text-xl md:px-20 md:text-2xl lg:text-3xl border-b border-gray-600 "
                    >
                        <div className="flex justify-center">
                            <UserEdit
                                userInfo={user}
                                updateUserInfo={(userInfo) => updateUserInfo(user.id, userInfo)}
                                deleteUser={() => deleteUser(user.id)}
                            />
                        </div>
                        <span className="text-center">{user.name}</span>
                        <span className="text-center">{user.chip}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
