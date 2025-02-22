import { FIXED_GAME_ID } from "../config";
import { useGameControl } from "../hook/useGameControl";
import UserList from "../components/Admin/UserList";
import GameControl from "../components/Admin/GameControl";
import Loading from "../components/Loading/Loading";


const AdminPage: React.FC = () => {
    const {
        data: { users, game},
        isPending,
        isError,
        updateUserInfo,
        startGame,
        nextStep,
        endGame,
    } = useGameControl(FIXED_GAME_ID);

    if (isPending) return <Loading />;
    if (isError) return <div>エラーが発生しました</div>;
    if (!users || !game) return <div>データがありません</div>;

    return (
        <div className="w-full h-full p-10 flex flex-col">
            <UserList users={users} updateUserInfo={updateUserInfo} />
            <GameControl
                users={
                    users.map((user) => ({
                        id: user.id,
                        name: user.name,
                    }))
                }
                isPlaying={game.isPlaying}
                gameControlFn={{ startGame, nextStep, endGame }}
            />
        </div>
    );
};

export default AdminPage;
