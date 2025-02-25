type Props = {
    deleteUser: () => void;
};

const KickUserBtn: React.FC<Props> = ({ deleteUser }) => {
    return (
        <button
            onClick={deleteUser}
            className="w-fit bg-red-600 hover:bg-red-500 desabled:bg-gray-600 rounded-md flex"
        >
            <img
                src="./logout.svg"
                className="m-auto w-12 h-12"
            />
        </button>
    );
};

export default KickUserBtn;
