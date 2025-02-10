import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/Login";
import AdminPage from "./pages/AdminPage";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin" element={<AdminPage />} />
            </Route>
        </Routes>
    );
};

export default App;
