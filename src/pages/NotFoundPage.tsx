import { useState, useEffect } from "react";
import CircleText from "../components/NotFound/CircleText";
import RotatingImage from "../components/NotFound/RotatingImage";
import ClickToAddImage from "../components/NotFound/ClickToAddImage";
import RandomImage from "../components/NotFound/RandomImage";

const NotFound: React.FC = () => {
    const fullText = "NOTFOUND";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timer = setTimeout(() => {
                setDisplayText((prev) => prev + fullText[index]);
                setIndex(index + 1);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [index]);

    return (
        <div className="relative flex items-center justify-center w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-20">
                <ClickToAddImage />
            </div>
            <div>
                <RandomImage />
            </div>
            <div className="absolute top-0 right-0 z-20">
                <RotatingImage />
            </div>
            <div className="relative flex flex-col items-center justify-center w-full h-full z-10">
                <CircleText text="お探しのページは見つかりませんでした。">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-widest text-white drop-shadow-lg">
                        404
                    </h1>
                    <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12">
                        <h2 className="text-center text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-white">
                            {displayText}
                        </h2>
                    </div>
                </CircleText>
            </div>
        </div>
    );
};

export default NotFound;
