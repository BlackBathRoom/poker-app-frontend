import React from "react";

interface ReloadButtonProps {
  onReload: () => void;
}

const ReloadButton: React.FC<ReloadButtonProps> = ({ onReload }) => {
  return (
    <button
      onClick={onReload}
      className="px-3 py-2 text-xs sm:text-sm bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold 
                 rounded-full shadow-md hover:opacity-80 active:scale-95 
                 transition duration-300 ease-in-out max-w-[120px]" 
    >
      ⟳ Reload
    </button>
  );
};

export default ReloadButton;
