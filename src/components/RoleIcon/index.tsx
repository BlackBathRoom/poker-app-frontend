import type { Role } from "../../game/types"


const iconVariants = {
    "": "border border-dashed border-black",
    "DB": "bg-slate-500 text-white",
    "SB": "bg-emerald-300 text-black",
    "BB": "bg-emerald-500 text-white",
};

type Props = {
    role: Role | "";
};

const RoleIcon: React.FC<Props> = ({ role }) => {
    return (
        <span className={`w-7 h-7 rounded-full flex justify-center items-center text-sm ${iconVariants[role]}`}>
            {role}
        </span>
    )
};

export default RoleIcon;
