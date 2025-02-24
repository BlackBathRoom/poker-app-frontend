import { Route, Routes } from "react-router-dom";

import { UserContextProvider } from "./components/providers/UserContextProvider";
import { ErrorModalProvider } from "./components/providers/ErrorModalProvider";
import Home from "./pages/Home";
import Layout from "./Layout";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/Login";
import AdminPage from "./pages/AdminPage";



const App: React.FC = () => {
    return (
        <UserContextProvider>
            <ErrorModalProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/main" element={<MainPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/admin" element={<AdminPage />} />
                    </Route>
                </Routes>
            </ErrorModalProvider>
        </UserContextProvider>
    );
};

export default App;
