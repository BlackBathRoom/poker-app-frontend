import { Link } from "react-router-dom";


type Props = {
    isOpen: boolean;
};

const SideMenu: React.FC<Props> = ({ isOpen }) => {
    return (
        <nav
            className={`fixed top-0 right-0 w-full h-dvh z-0 bg-black bg-opacity-90 text-white flex justify-center items-center 
              transition-all duration-500 ${isOpen ? 'left-0' : 'left-full'}`}
        >
            <ul className={`list-none text-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <li className="mb-6 hover:border-b-2 border-white"><Link to="/" className="text-white">Home</Link></li>
                <li className="mb-6 hover:border-b-2 border-white"><Link to="/main" className="text-white">Main</Link></li>
                <li className="mb-6 hover:border-b-2 border-white"><Link to="/login" className="text-white">Login</Link></li>
                <li className="mb-6 hover:border-b-2 border-white"><Link to="/admin" className="text-white">Admin</Link></li>
            </ul>
        </nav>
    );
};

export default SideMenu;
