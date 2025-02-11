import { useState } from "react";
import UserList from "../components/Admin/UserList";
import GameControl from "../components/Admin/GameControl";

type User = {
  id: number;
  name: string;
  chips: number;
};

const AdminPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "SampleUser", chips: 1000 }
  ]);

  // useEffect(() => {
  //   fetch("/api/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);

  return (
    <div className="p-10 space-y-4 ">
      <h1 className="text-2xl font-bold text-black text-center">管理者ページ</h1>
      <UserList users={users} />
      <GameControl />
    </div>
  );
};

export default AdminPage;
