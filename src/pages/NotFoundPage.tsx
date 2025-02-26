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
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <ClickToAddImage />
            </div>
            <div>
                <RandomImage />
            </div>
            <div className="absolute top-0 right-0 z-20">
                <RotatingImage />
            </div>
            <div className="relative flex flex-col items-center justify-center w-[80vw] h-[80vh] z-10">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-widest text-white drop-shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    404
                </h1>
                <CircleText text="お探しのページは見つかりませんでした。">
                    <div className="flex items-center justify-center w-full mt-[60px] sm:mt-[75px] md:mt-[100px] lg:mt-[200px] z-20">
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
