interface UserInfoProps {
    userName: string;
    chips: number;
}

const UserInfo: React.FC<UserInfoProps> = ({ userName, chips }) => {
    return (
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">プレイヤー情報</h2>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                ユーザー名: <span className="font-bold text-indigo-600">{userName}</span>
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                チップ数: <span className="font-bold text-green-500">{chips} 枚</span>
            </p>
        </div>
    );
};

export default UserInfo;
