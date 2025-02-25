type Props = {
    text: string;
};

const CircleText: React.FC<Props> = ({ text }) => {
    const textLength = text.length;
    const textArray = [...text];
    const radius = 300; 
    const circleLength = radius * 2 * Math.PI;
    const viewBoxSize = radius * 2 + 50;
    const textSpacing = circleLength / textLength; 

    return (
        <div className="h-fit w-fit relative">
            <style>
                {`
                    @keyframes circleSpin {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }

                    .animate-circle-spin {
                        animation: circleSpin 10s linear infinite;
                    }
                `}
            </style>

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
                            <tspan key={index} dx={textSpacing}>
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
