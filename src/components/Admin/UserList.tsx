import UserEdit from "./UserEdit";

type User = {
    id: number;
    name: string;
    chips: number;
};

type Props = {
    users: User[];
};

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-md max-h-[80%] overflow-y-auto">
      <h2 className="text-white text-xl mb-2">ユーザー</h2>
      <ul className="flex flex-col gap-2">
        {users.map((user) => (
          <li 
            key={user.id} 
            className="flex justify-around  text-white sm:text-xl md:text-2xl lg:text-3xl p-2 border-b border-gray-600 "
          >
            <div className="flex justify-center">
              <UserEdit />
            </div>
            <span className="text-center">{user.name}</span>
            <span className="text-center">{user.chips} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
