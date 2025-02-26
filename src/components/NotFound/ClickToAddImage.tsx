import { useState } from "react";

const ClickToAddImage: React.FC = () => {
    const [imagePositions, setImagePositions] = useState<{ x: number; y: number }[]>([]);
    const handleClick = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect(); 
        const x = e.pageX - rect.left;
        const y = e.pageY - rect.top;
        setImagePositions((prev) => [...prev, { x, y }]);
    };
    return (
        <div
            className="relative w-full h-full text-white"
            onClick={handleClick} 
        >
            {imagePositions.map((position, index) => (
                <img
                    key={index}
                    src="/Itsuki.png" 
                    alt="Random Image"
                    className="absolute h-60 transition-all duration-300 ease-in-out" 
                    style={{
                        transform: `translate(-50%, -50%)`,
                        left: `${position.x}px`,
                        top: `${position.y}px`, 
                    }}
                />
            ))}
        </div>
    );
};

export default ClickToAddImage;
