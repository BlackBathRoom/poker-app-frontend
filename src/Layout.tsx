import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";


const Layout: React.FC = () => {
    return (
        <div className="h-dvh w-screen bg-sky-200 flex flex-col">
            <div className="w-full h-24">
                <Header/>
            </div>
            <div className="flex-grow w-full h-[calc(100dvh-96px)] px-2 py-3">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
