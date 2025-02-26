import React, { useState } from "react";
import HorieDieFace from "../../../public/Horie-die-face.png";

type Position = {
    left: number;
    top: number;
};

const generateRandomPosition = (): Position => {
    return {
        left: Math.random() * 70 + 5, 
        top: Math.random() * 70 + 5,  
    };
};

const ErrorPage: React.FC = () => {
    const [imageCount, setImageCount] = useState(1);
    const [positions, setPositions] = useState<Position[]>([generateRandomPosition()]);

    const handleImageClick = () => {
        setImageCount(prev => prev + 1);
        setPositions(prev => [...prev, generateRandomPosition()]);
    };

    const images = Array.from({ length: imageCount });

    return (
        <div 
            className="relative h-full bg-gray-100"
            onClick={handleImageClick} 
        >
            <div className="z-10 relative flex flex-col items-center justify-center h-full pointer-events-none">
                <h1 className="text-3xl font-bold text-red-500 mb-4">
                    データの取得に失敗しました
                </h1>
            </div>
            {images.map((_, index) => {
                const pos = positions[index] || { left: 50, top: 50 };
                return (
                    <img
                        key={index}
                        src={HorieDieFace}
                        alt="Horie die face"
                        style={{
                            position: "absolute",
                            left: `${pos.left}%`,
                            top: `${pos.top}%`,
                            width: "90px",
                            height: "90px",
                        }}
                        className="cursor-pointer transition-transform duration-300"
                    />
                );
            })}
        </div>
    );
};

export default ErrorPage;
