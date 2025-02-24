import { Link } from "react-router-dom";


const paths = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Main',
        path: '/main',
    },
    {
        name: 'Login',
        path: '/login',
    },
    {
        name: 'Admin',
        path: '/admin',
    },
];

type Props = {
    isOpen: boolean;
    closeMenu: () => void;
};

const SideMenu: React.FC<Props> = ({ isOpen, closeMenu }) => {
    return (
        <nav
            className={`fixed top-0 right-0 w-full h-dvh z-0 bg-black bg-opacity-90 text-white flex justify-center items-center 
              transition-all duration-500 ${isOpen ? 'left-0' : 'left-full'}`}
        >
            <ul className={`list-none text-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {paths.map((path, index) => (
                    <li
                        key={index}
                        className="mb-6 hover:border-b-2 hover:border-white"
                    >
                        <Link
                            to={path.path}
                            className="text-white text-2xl"
                            onClick={closeMenu}
                        >
                            {path.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SideMenu;
