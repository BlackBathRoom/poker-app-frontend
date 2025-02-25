import React from "react";

interface ReloadButtonProps {
  onReload: () => void;
}

const ReloadButton: React.FC<ReloadButtonProps> = ({ onReload }) => {
  return (
    <button
      onClick={onReload}
      className="bg-gradient-to-r from-blue-500 to-blue-700
                 rounded-full shadow-md hover:opacity-80 active:scale-95 
                 transition duration-300 ease-in-out" 
    >
      <img
        src="./reload.svg"
        className="w-12"
      />
    </button>
  );
};

export default ReloadButton;
