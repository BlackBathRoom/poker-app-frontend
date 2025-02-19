import UserList from "../components/Admin/UserList";
import GameControl from "../components/Admin/GameControl";
import { useGetAllUserWithId, usePutSelectedUserInfo } from "../api/users";
import { UserInfo } from "../game/types";


const AdminPage: React.FC = () => {
    const userQuery = useGetAllUserWithId();
    const userMutate = usePutSelectedUserInfo();

    if (userQuery.isPending) return <div>Loading...</div>;
    if (userQuery.isError) return <div>Error</div>;
    if (!userQuery.data) return <div>No data</div>;

    const updateUserInfo = (id: string, userInfo: Partial<UserInfo>) => {
        userMutate.mutate({ ids: [id], userInfo });
    };

    return (
        <div className="p-10">
            <UserList users={userQuery.data} updateUserInfo={updateUserInfo} />
            <GameControl />
        </div>
    );
};

export default AdminPage;
