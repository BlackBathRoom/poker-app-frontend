import { UserInfo } from "../../game/types";
import UserEdit from "./UserEdit";


type UserInfoWithId = {
    id: string;
} & UserInfo;

type Props = {
    users: UserInfoWithId[];
    updateUserInfo: (id: string, userInfo: Partial<UserInfo>) => void;
};

const UserList: React.FC<Props> = ({ users, updateUserInfo }) => {
    return (
        <div className="p-4 bg-gray-800 rounded-md max-h-[80%] overflow-y-auto">
            <h2 className="text-white text-xl text-center mb-2">ユーザー</h2>
            <ul className="flex flex-col gap-2">
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
