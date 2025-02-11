type Props = {
    children: React.ReactNode;
  };
  
  const Header: React.FC<Props> = ({ children }) => {
    return (
      <header className="w-full py-4 bg-black text-center text-2xl font-bold tracking-wider text-white">
        {children}
      </header>
    );
  };
  
  export default Header;
  