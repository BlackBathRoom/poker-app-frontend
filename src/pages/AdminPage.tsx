import { useEffect, useState } from "react";
import UserList from "../components/Admin/UserList";
import GameControl from "../components/Admin/GameControl";
import UserEdit from "../components/Admin/UserEdit";

type User = {
  id: number;
  name: string;
  chips: number;
};

const AdminPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="p-10 space-y-4">
      <h1 className="text-2xl font-bold text-black ">管理者ページ</h1>
      <UserList users={users} />
      <GameControl />
      <UserEdit />
    </div>
  );
}

export default AdminPage;
