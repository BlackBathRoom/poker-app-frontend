import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";


const Layout: React.FC = () => {
    return (
        <div className="h-dvh w-screen bg-sky-200 flex flex-col">
            <div className="w-full">
                <Header/>
            </div>
            <div className="flex-grow w-full h-fit px-2 py-3">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
