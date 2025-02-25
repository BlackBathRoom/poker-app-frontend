type Props = {
    deleteUser: () => void;
};

const KickUserBtn: React.FC<Props> = ({ deleteUser }) => {
    return (
        <button
            onClick={deleteUser}
            className="w-32 pb-2 bg-red-600 hover:bg-red-500 desabled:bg-gray-600 rounded-md"
        >
            <span className="text-xl text-white text-center">
                退出
            </span>
        </button>
    );
};

export default KickUserBtn;
