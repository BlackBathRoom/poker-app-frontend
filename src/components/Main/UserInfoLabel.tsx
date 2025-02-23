interface Props {
    userName: string;
    chips: number;
    isPlaying?: boolean; 
};

const UserInfoLabel: React.FC<Props> = ({ userName, chips, isPlaying = true }) => { 
    return (
        <div className="flex flex-col gap-4 items-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
                <span className="font-bold text-indigo-600">{userName}</span>
            </p>
            <p className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold ${isPlaying ? 'text-green-500' : 'text-red-500'}`}>
                {isPlaying ? '参加中' : '不参加'}
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
                チップ数: <span className="font-bold text-green-500">{chips} 枚</span>
            </p>
        </div>
    );
};

export default UserInfoLabel;
