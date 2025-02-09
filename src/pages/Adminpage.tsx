import UserList from "../components/Admin/UserList";
import GameControl from "../components/Admin/GameControl";
import UserEdit from "../components/Admin/UserEdit";

export default function Home() {
  return (
    <div className="p-10 space-y-4">
      <UserList />
      <GameControl />
      <UserEdit />
    </div>
  );
}
