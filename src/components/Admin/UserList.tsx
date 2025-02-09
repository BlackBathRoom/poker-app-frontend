import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  chips: number;
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="p-4 bg-gray-800 rounded-md">
      <h2 className="text-white text-xl mb-2">ユーザー一覧</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="text-white">
            {user.name} - {user.chips} チップ
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
