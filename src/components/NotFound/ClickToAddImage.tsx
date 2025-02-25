import { useState } from "react";

const ClickToAddImage: React.FC = () => {
    const [imagePositions, setImagePositions] = useState<{ x: number; y: number }[]>([]);

    // クリックイベントを処理して、画像をクリックした位置に追加
    const handleClick = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect(); // 親要素の位置を取得
        const x = e.pageX - rect.left; // 親要素内でのクリック位置
        const y = e.pageY - rect.top;  // 親要素内でのクリック位置

        console.log("クリック位置:", x, y); // クリック位置を確認

        setImagePositions((prev) => [...prev, { x, y }]);
    };

    return (
        <div
            className="relative w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
            onClick={handleClick} // クリック時に画像を追加
        >
            {imagePositions.map((position, index) => (
                <img
                    key={index}
                    src="/Itsuki.png" // 任意の画像URLに変更
                    alt="Random Image"
                    className="absolute h-60 transition-all duration-300 ease-in-out" // 画像サイズを大きく
                    style={{
                        left: `${position.x - 32 / 2}px`, // 画像の中心をクリック位置に合わせる
                        top: `${position.y - 32 / 2}px`,  // 画像の中心をクリック位置に合わせる
                    }}
                />
            ))}
        </div>
    );
};

export default ClickToAddImage;
