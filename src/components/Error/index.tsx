import React, { useState, useEffect } from "react";
import HorieDieFace from "./public/Horie-die-face.png";

type Position = {
    left: number;
    top: number;
};

const ErrorPage: React.FC = () => {
    const [imageCount, setImageCount] = useState(1);
    const [positions, setPositions] = useState<Position[]>([]);

    useEffect(() => {
        if (positions.length < imageCount) {
            setPositions((prev) => [
                ...prev,
                ...Array.from({ length: imageCount - prev.length }).map(() => ({
                    left: Math.random() * 90, 
                    top: Math.random() * 90,
                })),
            ]);
        }
    }, [imageCount, positions.length]);

    const handleImageClick = () => {
        setImageCount((prev) => prev + 1);
    };

    const images = Array.from({ length: imageCount });

    return (
        <div className="relative min-h-screen bg-gray-100">
            <div className="z-10 relative flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-3xl font-bold text-red-500 mb-4">
                    データの取得に失敗しました
                </h1>
            </div>
            {images.map((_, index) => {
                const pos = positions[index] || { left: 0, top: 0 };
                return (
                    <img
                        key={index}
                        src={HorieDieFace}
                        alt="Horie die face"
                        onClick={handleImageClick}
                        style={{
                            position: "absolute",
                            left: `${pos.left}%`,
                            top: `${pos.top}%`,
                        }}
                        className="cursor-pointer transition-transform duration-300"
                    />
                );
            })}
        </div>
    );
};

export default ErrorPage;
