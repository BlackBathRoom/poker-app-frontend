import { FIXED_GAME_ID } from "../config";
import { useGetGameInfo } from "../api/gameInfo";
import { useGetAllUser } from "../api/users";
import GameInfo from "../components/GameInfo/GameInfo";
import Loading from "../components/Loading/Loading";


const Home: React.FC = () => {
    const userQuery = useGetAllUser();
    const gameInfoQuery = useGetGameInfo(FIXED_GAME_ID);

    if (userQuery.isPending || gameInfoQuery.isPending) {
        return <Loading />;
    }
    if (userQuery.isError || gameInfoQuery.isError) {
        return <div>Error</div>;
    }
    if (!userQuery.data || !gameInfoQuery.data) {
        return <div>No data</div>;
    }

    return (
        <div className="w-full max-w-screen-md h-full m-auto flex flex-col gap-10">
            <div className="h-1/4">
                <GameInfo potSize={gameInfoQuery.data.pot} rate={gameInfoQuery.data.currentBet} />
            </div>
            <div className="min-h-[22rem] flex bg-green-100 border border-slate-950 rounded-md">
                <div className="px-2 py-3 h-full m-auto ">
                    <ul className="flex flex-col gap-3 h-full w-72 justify-center items-center">
                        {userQuery.data.map((userInfo, index) => (
                            <li
                            key={index}
                            className="w-5/6 flex flex-col gap-3">
                                <div className="flex justify-between text-3xl">
                                    <span>{userInfo.name}</span>
                                    <span>{userInfo.chip}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
