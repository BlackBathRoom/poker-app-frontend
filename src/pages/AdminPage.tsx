import { FIXED_GAME_ID } from "../config";
import { useGameControl } from "../hook/useGameControl";
import UserList from "../components/Admin/UserList";
import GameControl from "../components/Admin/GameControl";
import Loading from "../components/Loading/Loading";
import { useModal } from "../hook/useModal";
import SettingModal from "../components/SettingModal/SettingModal";


const AdminPage: React.FC = () => {
    const {
        data: { users, game},
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
    if (isError) return <div>エラーが発生しました</div>;
    if (!users || !game) return <div>データがありません</div>;

    return (
        <div className="w-full h-full p-10 flex flex-col">
            <UserList users={users} updateUserInfo={updateUserInfo} deleteUser={handleDeleteUser} />
            <GameControl
                users={users.filter((user) => user.isPlaying)}
                isPlaying={game.isPlaying}
                gameControlFn={{ startGame, nextStep, endGame }}
            />
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
