import { useMemo } from "react";

type Props = {
    children?: React.ReactNode;
    text: string;
};

const CircleText: React.FC<Props> = ({ children, text }) => {
    const radius = useMemo(() => {
        if (typeof window !== "undefined") {
            const width = window.innerWidth;
            if (width >= 768) return 250;
            if (width >= 640) return 150;
            return 130;
        }
        return 100;
    }, []);

    const fontSize = useMemo(() => {
        if (radius >= 250) return 45;
        if (radius >= 150) return 30;
        return 20;
    }, [radius]);

    const circumference = radius * 2 * Math.PI;
    const diameter = radius * 2;
    const boxSize = diameter + fontSize * 2;
    const textArray = [...text];
    const uniqueId = useMemo(
        () => `circlePath-${Math.random().toString(36).substr(2, 9)}`,
        []
    );

    return (
        <div className="relative flex items-center justify-center w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px]">
            <svg
                viewBox={`0 0 ${boxSize} ${boxSize}`}
                className="absolute top-0 left-0 animate-circle-spin w-full h-full"
            >
                <defs>
                    <path
                        id={uniqueId}
                        d={`M ${boxSize / 2}, ${boxSize / 2} m -${radius}, 0 
                            a ${radius},${radius} 0 1,1 ${diameter},0 
                            a ${radius},${radius} 0 1,1 -${diameter},0`}
                    />
                </defs>
                <text fontSize={fontSize} fill="white">
                    <textPath href={`#${uniqueId}`} textLength={circumference}>
                        {textArray.map((char, index) => (
                            <tspan dx={circumference / textArray.length} key={index}>
                                {char}
                            </tspan>
                        ))}
                    </textPath>
                </text>
            </svg>
            <div className="absolute flex flex-col items-center justify-center w-full h-full text-center">
                {children}
            </div>
        </div>
    );
};

export default CircleText;
