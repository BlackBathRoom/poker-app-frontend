import { useState, useEffect } from "react";
import CircleText from "../components/NotFound/CircleText";
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
        <div className="relative flex items-center justify-center w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <RandomImage />
            </div>
            <div className="relative flex flex-col items-center justify-center w-[80vw] h-[80vh] z-10">
                <h1 className="text-9xl font-extrabold tracking-widest text-white drop-shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-8xl sm:text-7xl">
                    404
                </h1>
                <CircleText text="お探しのページは見つかりませんでした。" radius={250} fontSize={45}>
                    <div className="flex items-center justify-center w-full mt-[150px]">
                        <h2 className="text-center text-4xl font-bold text-white md:text-3xl sm:text-2xl">
                            {displayText}
                        </h2>
                    </div>
                </CircleText>
            </div>
        </div>
    );
};

export default NotFound;
