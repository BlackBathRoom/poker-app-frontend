import Label from "./Label";

interface GameInfoProps {
    potSize: number;
    rate: number;
}

const GameInfo: React.FC<GameInfoProps> = ({ potSize, rate }) => {
    return (
        <div className="flex justify-around w-full">
            <Label label="Pot" value={potSize.toString()} />
            <Label label="Rate" value={rate.toString()} />
        </div>
    );
};

export default GameInfo;
