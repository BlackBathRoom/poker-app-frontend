type Props = {
    children?: React.ReactNode;
    text: string;
    radius?: number;
    fontSize?: number;
};

const CircleText: React.FC<Props> = ({
    children,
    text,
    radius = 75,
    fontSize = 16,
}) => {
    const circumference = radius * 2 * Math.PI;
    const diameter = radius * 2;
    const boxSize = diameter + fontSize * 2;
    const textArray = [...text];
    const uniqueId = `circlePath-${Math.random().toString(36).substr(2, 9)}`; 

    return (
        <div className="relative flex" style={{ height: diameter, width: diameter }}>
            <svg
                viewBox={`0 0 ${boxSize} ${boxSize}`}
                className="absolute top-0 left-0 animate-circle-spin"
                style={{ height: diameter, width: diameter }}
            >
                <defs>
                    <path
                        id={uniqueId}
                        d={`M ${boxSize / 2}, ${boxSize / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${diameter},0 a ${radius},${radius} 0 1,1 -${diameter},0`}
                    />
                </defs>
                <text fontSize={fontSize} fill="white">
                    <textPath href={`#${uniqueId}`} textLength={circumference}>
                        {textArray.map((char, index) => (
                            <tspan
                                dx={circumference / textArray.length}
                                key={index}
                            >
                                {char}
                            </tspan>
                        ))}
                    </textPath>
                </text>
            </svg>
            <div className="m-auto">{children}</div>
        </div>
    );
};

export default CircleText;
