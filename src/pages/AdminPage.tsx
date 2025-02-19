import UserList from "../components/Admin/UserList";
import GameControl from "../components/Admin/GameControl";
import { useGetAllUserWithId } from "../api/users";


const AdminPage: React.FC = () => {
    const userQuery = useGetAllUserWithId();

    if (userQuery.isPending) return <div>Loading...</div>;
    if (userQuery.isError) return <div>Error</div>;
    if (!userQuery.data) return <div>No data</div>;

    const users = userQuery.data
    return (
        <div className="p-10">
            <UserList users={users} />
            <GameControl />
        </div>
    );
};

export default AdminPage;
