type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerMenu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
        <button
            onClick={() => setIsOpen(!isOpen)} 
            className="w-8 h-6 bg-transparent border-none outline-none cursor-pointer z-10"
        >
            <span
                className={`block w-8 h-1 bg-white mb-2 transition-all duration-300 rounded-full ${isOpen ? 'transform rotate-45 translate-y-4' : ''}`}
            />
            <span
                className={`block w-8 h-1 bg-white mb-2 transition-all duration-300 rounded-full ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
                className={`block w-8 h-1 bg-white transition-all duration-300 rounded-full ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}
            />
        </button>
    );
};

export default HamburgerMenu;
