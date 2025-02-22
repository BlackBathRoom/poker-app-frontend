import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import SideMenu from "../SideMenu/SideMenu";


const Header: React.FC = () => {
  const [ isOpen,setIsOpen ] = useState<boolean>(false);

  return (
    <>
    <div className="w-full py-8 bg-black text-white text-2xl font-bold tracking-wider flex justify-center items-center relative z-50">
      <div>POKER</div>
      <div className="absolute right-6">
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
    <SideMenu isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    </>
  );
};

export default Header;