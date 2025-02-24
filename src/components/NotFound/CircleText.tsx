type Props = {
    text: string;
}

const CircleText: React.FC<Props> = ({ text }) => {
    const textLength = text.length;
    const textArray = [...text];

    return (
        <div className="h-fit w-fit animate-spin-slow">
            <svg viewBox="0 0 200 200" className="w-40 h-40">
                <defs>
                    <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"/>
                </defs>
                <text font-size="16" fill="black">
                    <textPath href="#circlePath" textLength="471">
                        {textArray.map((char) => (
                            <tspan
                                dx={471 / textLength}
                            >
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