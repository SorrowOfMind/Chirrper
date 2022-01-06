import {createContext, useState} from 'react';
import {IUserState} from '../models/interfaces';

const initialUserState : IUserState = {
    logged: false
}

export const UserContext = createContext<IUserState | any>(initialUserState);

const UserContextProvider = ({children} : JSX.ElementChildrenAttribute): JSX.Element => {
    const [userState, setUserState] = useState(initialUserState);
    return (
        <UserContext.Provider value={{userState}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider
