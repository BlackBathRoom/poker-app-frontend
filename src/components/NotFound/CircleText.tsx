type Props = {
    text: string;
};

const CircleText: React.FC<Props> = ({ text }) => {
    const textLength = text.length;
    const textArray = [...text];
    const radius = 250; // 半径を250pxに設定（これにより文字が十分に収まるようにする）
    const circleLength = radius * 2 * Math.PI; // 円周を計算

    // viewBox のサイズを動的に設定
    const viewBoxSize = radius * 2 + 50; // 半径の2倍に少し余裕を加えたサイズ

    // 文字間隔を調整して、長いテキストが切れないようにする
    const textSpacing = circleLength / textLength * 1.4; // 文字間隔を少し広げて調整

    return (
        <div className="h-fit w-fit relative">
            

            <svg
                viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
                className="w-80 h-80 animate-circle-spin"
            >
                <defs>
                    <path
                        id="circlePath"
                        d={`M ${viewBoxSize / 2}, ${viewBoxSize / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
                    />
                </defs>
                <text fontSize="36" fill="white">
                    <textPath href="#circlePath" textLength={circleLength}>
                        {textArray.map((char, index) => (
                            <tspan key={index} dx={textSpacing}> {/* 文字間隔を調整 */}
                                {char}
                            </tspan>
                        ))}
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default CircleText;
