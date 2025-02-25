import { useState, useEffect } from "react";

const RandomImage: React.FC = () => {
    const [positions, setPositions] = useState<{ id: number; x: number; y: number }[]>([]);
    const [imageCount, setImageCount] = useState(0);
    const safeRadius = 250; 
    const centerX = 50; 
    const centerY = 50; 

    useEffect(() => {
        const interval = setInterval(() => {
            setImageCount((prev) => prev + 1);

            let x, y;
            do {
                
                x = Math.random() * 80 + 10;
                y = Math.random() * 80 + 10;
            } while (
                Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)) < safeRadius / 10 
            );

            setPositions((prev) => [...prev, { id: imageCount, x, y }]);
        }, 5000); 

        return () => clearInterval(interval);
    }, [imageCount]);

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {positions.map((pos) => (
                <img
                    key={pos.id}
                    src="/Itsuki.png" 
                    alt="Random Image"
                    className="absolute h-60 transition-all duration-500 ease-in-out"
                    style={{
                        left: `${pos.x}%`,
                        top: `${pos.y}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ))}
        </div>
    );
};

export default RandomImage;