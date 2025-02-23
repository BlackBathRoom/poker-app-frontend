import React from "react";

const ReloadButton: React.FC = () => {
  return (
    <button
      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold 
                 text-lg rounded-full shadow-lg hover:opacity-80 active:scale-95 
                 transition duration-300 ease-in-out"
    >
      ⟳ Reload
    </button>
  );
};

export default ReloadButton;
