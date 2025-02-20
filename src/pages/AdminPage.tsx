import { useGetAllUserWithId, usePutSelectedUserInfo } from "../api/users";
import { useGetGameInfo, usePutGameInfo } from "../api/gameInfo";
import { FIXED_GAME_ID } from "../config";
import type { UserInfo } from "../game/types";
import UserList from "../components/Admin/UserList";
import GameControl from "../components/Admin/GameControl";

const AdminPage: React.FC = () => {
    const userQuery = useGetAllUserWithId();
    const gameQuery = useGetGameInfo(FIXED_GAME_ID);

    const userMutate = usePutSelectedUserInfo();
    const gameMutate = usePutGameInfo(FIXED_GAME_ID);

    if (userQuery.isPending || gameQuery.isPending) return <div>Loading...</div>;
    if (userQuery.isError || gameQuery.isError) return <div>Error</div>;
    if (!userQuery.data || !gameQuery.data) return <div>No data</div>;

    const updateUserInfo = (id: string, userInfo: Partial<UserInfo>) => {
        userMutate.mutate({ ids: [id], userInfo });
    };

    const startGame = () => {
        if (!userQuery.data || !gameQuery.data) return;
        userMutate.mutate({
            ids: userQuery.data.map((user) => user.id),
            userInfo: { isPlaying: true },
        });
        gameMutate.mutate({ "isPlaying": true });
    };

    const endGame = (id: string) => {
        if (!userQuery.data || !gameQuery.data) return;

        const winnerPrevChip = userQuery.data.find((user) => user.id === id)?.chip;
        if (winnerPrevChip) {
            userMutate.mutate({
                ids: [id],
                userInfo: { chip: winnerPrevChip + gameQuery.data.pot },
            });
        }

        userMutate.mutate({
            ids: userQuery.data.map((user) => user.id),
            userInfo: { isPlaying: false },
        });
        gameMutate.mutate({
            "currentBet": 0,
            "pot": 0,
            "isPlaying": false,
        });
    };

    return (
        <div className="p-10">
            <UserList users={userQuery.data} updateUserInfo={updateUserInfo} />
            <GameControl
                users={
                    userQuery.data.map((user) => ({
                        id: user.id,
                        name: user.name,
                    }))
                }
                startGame={startGame}
                endGame={endGame}
            />
        </div>
    );
};

export default AdminPage;
