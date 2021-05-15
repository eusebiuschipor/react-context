import React, { useState } from 'react';

const Context = React.createContext({
    user: null,
    setUserHandler: (user) => {}
});

const ContextProvider = (props) => {
    const [contextData, setContextData] = useState({
        user: {
            token: null,
            username: null
        }
    });

    const setUserHandler = (user) => {
        // const newContext = Object.create(contextData); // --- Varianta cu Object.create()
        // newContext.user.token = user.token;
        // newContext.user.username = user.username;
        // setContextData(newContext);

        // --- Varianta cu spread
        contextData.user.token = user.token;
        contextData.user.username = user.username;
        setContextData({ ...contextData });

    }

    return (
        <Context.Provider value={{
            data: contextData,
            setUserHandler: setUserHandler
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider};