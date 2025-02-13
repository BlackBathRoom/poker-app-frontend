import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed top-4 right-4 w-8 h-6 bg-transparent border-none outline-none cursor-pointer z-10"
      >
        <span
          className={`block w-8 h-1 bg-white mb-2 transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-4' : ''}`}
        ></span>
        <span
          className={`block w-8 h-1 bg-white mb-2 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
        ></span>
        <span
          className={`block w-8 h-1 bg-white transition-all duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}
        ></span>
      </button>

      <nav
        className={`fixed top-0 right-0 w-full h-screen bg-black bg-opacity-90 text-white flex justify-center items-center 
          transition-all duration-500 ${isOpen ? 'left-0' : 'left-full'}`}
      >
        <ul className={`list-none text-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <li className="mb-6 hover:border-b-2 border-white"><a href="/Home" className="text-white">Home</a></li>
          <li className="mb-6 hover:border-b-2 border-white"><a href="/Main" className="text-white">Main</a></li>
          <li className="mb-6 hover:border-b-2 border-white"><a href="/Login" className="text-white">Login</a></li>
          <li className="mb-6 hover:border-b-2 border-white"><a href="/Admin" className="text-white">Admin</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
