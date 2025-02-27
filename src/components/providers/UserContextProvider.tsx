import { useState } from "react";
import { UserContext } from "../../context/userContext";


type Props = {
    children: React.ReactNode;
};

const UserContextProvider: React.FC<Props> = ({ children }) => {
    const [ id, setId ] = useState<string | null>(null);

    return(
        <UserContext.Provider value={{ id, setId }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
