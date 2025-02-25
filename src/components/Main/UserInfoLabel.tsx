import { UserInfo } from "../../game/types";
import RoleIcon from "../RoleIcon";


interface Props {
    userInfo: UserInfo;
};

const UserInfoLabel: React.FC<Props> = ({ userInfo }) => { 
    return (
        <div className="flex flex-col gap-4 p-8 bg-white/40 items-center rounded-md shadow">
            <div className="text-2xl flex gap-2 items-center sm:text-3xl md:text-4xl lg:text-4xl">
                <RoleIcon role="" />
                <span className="font-bold text-black pb-1">{userInfo.name}</span>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
                チップ : <span className="font-bold text-black">{userInfo.chip} 枚</span>
            </p>
            <p className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold ${userInfo.isPlaying ? 'text-green-500' : 'text-red-500'}`}>
                {userInfo.isPlaying ? '参加中' : '不参加'}
            </p>
        </div>
    );
};

export default UserInfoLabel;
