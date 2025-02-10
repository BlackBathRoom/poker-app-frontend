import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/Login";
import { UserContextProvider } from "./components/providers/UserContextProvider";

const App: React.FC = () => {
    return (
        <UserContextProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />           
                </Route>
            </Routes>
        </UserContextProvider>
    );
};

export default App;
