import HamburgerMenu from "./HamburgerMenu";


const Header: React.FC = () => {
  return (
    <div className="w-screen py-8 bg-black text-white text-2xl font-bold tracking-wider flex justify-center items-center relative">
      <div>POKER</div>
      <div className="absolute right-6">
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Header;