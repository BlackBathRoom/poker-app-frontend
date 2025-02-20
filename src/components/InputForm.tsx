import { useState } from "react";

type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: React.InputHTMLAttributes<HTMLInputElement>["value"];
    formName?: string;
    placeholder?: string;
    className?: string;
    isNumber?: boolean;
};

const InputForm: React.FC<Props> = ({
    onChange,
    value,
    className = "",
    placeholder = "",
    isNumber = false,
}) => {
    const [isError, setIsError] = useState<boolean>(false);

    const numberChecker = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        
        const inputValue = Number(e.target.value);
        if (isNaN(inputValue) || inputValue < 0) {
            setIsError(true);
            return;
        }

        if (value === 0) {
            setIsError(false);
            e.target.value = String(inputValue);
            onChange(e);
        } else {
            setIsError(false);
            onChange(e);
        }
    };

    return (
        <div className="flex flex-col gap-1 w-full h-12">
            <input
                type={isNumber ? "number" : "text"}
                value={value}
                placeholder={placeholder}
                onChange={(e) => isNumber ? numberChecker(e) : onChange(e)}
                className={`p-1 rounded-md ${className} ${isError ? "border-red-500" : ""}`}
            />
            {isError && <span className="text-red-500">入力値が不正です</span>}
        </div>
    );
};

export default InputForm;
