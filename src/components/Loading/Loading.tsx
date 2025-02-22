import React from "react";

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-12 h-12 border-8 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-gray-700">{message}</p>
    </div>
  );
};

export default Loading;
