import type { Role } from "./types"


type RoleAndBlank = Role | "";

type Props = {
    users: RoleAndBlank[];
    newDBIndex: number;
};

export const changeRole = ({ users, newDBIndex }: Props): RoleAndBlank[] => {
    let isComplete = false;
    let i = newDBIndex;
    let role: RoleAndBlank = "DB";
    const newUsers: RoleAndBlank[] = users.map(() => "");

    while (!isComplete) {
        if (i >= users.length) i = 0;
        newUsers[i] = role;

        if (role === "DB") {
            role = "SB";
        } else if (role === "SB") {
            role = "BB";
        } else if (role === "BB") {
            isComplete = true;
        }
    
        i++;
    };

    return newUsers;
};
