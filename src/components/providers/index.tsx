import ErrorModalContextProvider from "./ErrorModalProvider";
import UserContextProvider from "./UserContextProvider";


type Props = {
    children: React.ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }) => {
    return (
        <ErrorModalContextProvider>
            <UserContextProvider>
                {children}
            </UserContextProvider>
        </ErrorModalContextProvider>
    );
};

export default ContextProvider;
