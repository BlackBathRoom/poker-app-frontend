import React, { useState } from "react";
import HorieDieFace from "./public/Horie-die-face.png";

const ErrorPage: React.FC = () => {
  const [imageCount, setImageCount] = useState(1);

  const handleImageClick = () => {
    setImageCount(prevCount => prevCount + 1); 
  };

  const images = Array.from({ length: imageCount });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-500 mb-4">
        データの取得に失敗しました
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((_, index) => (
          <img
            key={index}
            src={HorieDieFace}
            alt="Horie die face"
            onClick={handleImageClick}
            className="cursor-pointer transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default ErrorPage;

