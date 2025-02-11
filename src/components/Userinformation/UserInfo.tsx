interface UserInfoProps {
    userName: string;
    chips: number;
}

const UserInfo: React.FC<UserInfoProps> = ({ userName, chips }) => {
    return (
        <div className="">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
                ユーザー名: <span className="font-bold text-indigo-600">{userName}</span>
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
                チップ数: <span className="font-bold text-green-500">{chips} 枚</span>
            </p>
        </div>
    );
};

export default UserInfo;
