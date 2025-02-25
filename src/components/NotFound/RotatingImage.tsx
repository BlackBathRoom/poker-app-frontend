import { useState, useEffect } from "react";

const RotatingImage: React.FC = () => {
    const [rotate, setRotate] = useState(false);
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(true);
        }, 15000); 

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showImage) {
            setRotate(true); 
        }
    }, [showImage]);

    return (
        <div className="relative w-full h-screen">
            {showImage && (
                <div
                    className={`absolute top-0 right-0 w-80 h-80 flex items-center justify-center animate-rotate ${
                        rotate ? "rotate" : ""
                    }`}
                    style={{ position: "relative" }}
                >
                    
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="absolute"
                            style={{
                                transform: `rotate(${(index * 90)}deg) translateX(100px) rotate(${-(index * 90)}deg)`,
                                width: "80px",
                                height: "80px",
                                backgroundImage: "url('/Itsuki.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "50%",
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RotatingImage;
