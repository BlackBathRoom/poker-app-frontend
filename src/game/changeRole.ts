import type { Role } from "./types"


type RoleAndBlank = Role | "";

type Props = {
    users: RoleAndBlank[];
    newDBIndex: number;
};

export const changeRole = ({ users, newDBIndex }: Props): RoleAndBlank[] => {
    let i = newDBIndex;
    let role: RoleAndBlank = "DB";
    const newUsers: RoleAndBlank[] = users.map(() => "");

    while (true) {
        try {
            if (newUsers[i] === "DB") break;
            newUsers[i] = role;

            if (role === "DB") {
                role = "SB";
            } else if (role === "SB") {
                role = "BB";
            } else {
                role = "";
            }

            i++;
        } catch {
            i = 0;
        }
    };

    return newUsers;
};
