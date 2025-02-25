import { useState, useEffect } from "react";
import CircleText from "../components/NotFound/CircleText";

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
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        <h1 className="text-9xl font-extrabold tracking-widest text-white drop-shadow-lg absolute">
            404
        </h1>
        <CircleText text="お探しのページは見つかりませんでした。" />

        <h2 className="absolute top-[350px] text-4xl font-bold text-white">{displayText}</h2>
      </div>
    </div>
  );
};

export default NotFound;
