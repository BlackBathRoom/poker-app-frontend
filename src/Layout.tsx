import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";


const Layout: React.FC = () => {
    return (
        <div className="h-svh w-full m-0  bg-sky-200 flex flex-col items-center justify-center">
            <div>
                <Header/>
            </div>
            <div className="flex-grow w-full px-2 py-3">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
