import { useEffect, useRef } from "react";

const NotFound: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const text = "お探しのページは見つかりませんでした。";
  const radius = 150; // 円の半径
  const angleIncrement = (2 * Math.PI) / text.length; // 文字間の角度の増分
  let rotationAngle = 0; // 回転角度

  useEffect(() => {
    if (!textRef.current) return;

    const textWrapper = textRef.current;
    textWrapper.innerHTML = "";

    // テキストを円形に配置
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.textContent = text[i];
      span.className = "absolute text-white text-xl font-bold transition-opacity duration-300";
      textWrapper.appendChild(span);
    }

    // ランダムなタイミングで文字が点滅する関数
    const flashRandomCharacter = () => {
      const randomIndex = Math.floor(Math.random() * text.length);
      const randomChar = textWrapper.children[randomIndex] as HTMLElement;

      let opacity = 1;
      const fadeOutInterval = setInterval(() => {
        opacity -= 0.1;
        randomChar.style.opacity = opacity.toString();
        if (opacity <= 0) {
          clearInterval(fadeOutInterval);
          setTimeout(() => fadeIn(), 100);
        }
      }, 50);

      const fadeIn = () => {
        let opacity = 0;
        const fadeInInterval = setInterval(() => {
          opacity += 0.1;
          randomChar.style.opacity = opacity.toString();
          if (opacity >= 1) {
            clearInterval(fadeInInterval);
          }
        }, 50);
      };
    };

    // 一定の間隔で回転させる
    const rotateText = () => {
      rotationAngle += Math.PI / 180; // 1度ずつ回転
      for (let i = 0; i < text.length; i++) {
        const angle = angleIncrement * i + rotationAngle;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const rotation = angle + Math.PI / 2;
        (textWrapper.children[i] as HTMLElement).style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotation}rad)`;
      }
    };

    const rotateInterval = setInterval(rotateText, 30);
    const flashInterval = setInterval(flashRandomCharacter, 2000);

    return () => {
      clearInterval(rotateInterval);
      clearInterval(flashInterval);
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        <h1 className="text-9xl font-extrabold tracking-widest text-white drop-shadow-lg absolute">
          404
        </h1>
        <div ref={textRef} className="absolute w-0 h-0"></div>
      </div>
    </div>
  );
};

export default NotFound;
