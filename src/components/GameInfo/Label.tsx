type Props = {
    label: string;
    value: string;
};

const Label: React.FC<Props> = ({ label, value }) => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center p-2">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{label}</span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">{value}</span>
        </div>
    );
};

export default Label;
