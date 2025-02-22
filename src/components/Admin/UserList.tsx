import type { UserInfo, UserInfoWithId } from "../../game/types";
import UserEdit from "./UserEdit";


type Props = {
    users: UserInfoWithId[];
    updateUserInfo: (id: string, userInfo: Partial<UserInfo>) => void;
};

const UserList: React.FC<Props> = ({ users, updateUserInfo }) => {
    return (
        <div className="p-4 bg-gray-800 rounded-md flex flex-col gap-2 max-h-[85%]">
            <h2 className="text-white text-xl text-center mb-2">ユーザー</h2>
            <ul className="flex flex-col gap-2 overflow-y-auto">
                {users.map((user) => (
                    <li
                        key={user.id} 
                        className="flex justify-around  text-white sm:text-xl md:text-2xl lg:text-3xl p-2 border-b border-gray-600 "
                    >
                        <div className="flex justify-center">
                            <UserEdit
                                userInfo={user}
                                updateUserInfo={(userInfo) => updateUserInfo(user.id, userInfo)} 
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
