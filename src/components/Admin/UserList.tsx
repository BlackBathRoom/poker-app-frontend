type User = {
    id: number;
    name: string;
    chips: number;
};

type Props = {
    users:User[];
};

const UserList: React.FC<Props> = ({users}) => {
  return (
    <div className="p-4 bg-gray-800 rounded-md">
      <h2 className="text-white text-xl mb-2">ユーザー</h2>
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
