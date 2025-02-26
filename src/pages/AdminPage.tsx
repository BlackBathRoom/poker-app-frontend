import { FIXED_GAME_ID } from "../config";
import { useGameControl } from "../hook/useGameControl";
import { useModal } from "../hook/useModal";
import UserList from "../components/Admin/UserList";
import GameControl from "../components/Admin/GameControl";
import Loading from "../components/Loading/Loading";
import SettingModal from "../components/SettingModal/SettingModal";
import GameInfo from "../components/GameInfo/GameInfo";
import ErrorPage from "../components/Error";


const AdminPage: React.FC = () => {
    const {
        data: { users, game },
        isPending,
        isError,
        updateUserInfo,
        updateGameInfo,
        startGame,
        nextStep,
        endGame,
        handleDeleteUser,
        changeRole,
    } = useGameControl(FIXED_GAME_ID);
    const { Modal, openModal, closeModal } = useModal();

    const changeRate = (rate: number) => {
        updateGameInfo({ currentBet: rate });
    };

    if (isPending) return <Loading />;
    if ((isError) || (!users || !game)) {
        return <ErrorPage />;
    }

    return (
        <div className="w-full h-full p-3 flex flex-col max-w-5xl justify-center items-center m-auto sm:p-5">
            <button
                className="w-fit h-fit ml-auto mr-0"
                onClick={() => openModal()}
            >
                <img src="/setting.svg" alt="setting" className="w-8 sm:w-10" />
            </button>
            <div className="flex flex-col w-full h-full p-4 gap-5 items-center sm:h-[96%] sm:p-8">
                <GameInfo potSize={game.pot} rate={game.currentBet} />
                <UserList users={users} updateUserInfo={updateUserInfo} deleteUser={handleDeleteUser} />
                <GameControl
                    users={users.filter((user) => user.isPlaying)}
                    isPlaying={game.isPlaying}
                    gameControlFn={{ startGame, nextStep, endGame }}
                />
            </div>
            <Modal>
                <SettingModal
                    users={users}
                    updateFn={{ changeRole, changeRate }}
                    rate={game.currentBet}
                    closeModal={closeModal}
                />
            </Modal>
        </div>
    );
};

export default AdminPage;
