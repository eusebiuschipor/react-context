import React, { useState } from 'react';

// Data interface for context
const Context = React.createContext({
    data : null,
    saveA: (value) => { },
    saveB: (value) => { },
    saveC: (value) => { },
    saveX: (value) => { },
    saveSemn: (value) => { },
    saveAllData: (value) => { }
});

// Context definition (exchange data)
const ContextProvider = (props) => {
    const [contextData, setContextData] = useState({
        result: [1, 2, 3],
        a: 1,
        b: 1,
        c: 1,
        x: [1, 2, 3],
        semn: 'pozitiv'
    });

    // Updates context data with Input values
    function saveA(value) {
        const newContextData = Object.create(contextData);
        newContextData.a = value;
        // calculates result
        f(newContextData);
    }

    function saveB(value) {
        const newContextData = Object.create(contextData);
        newContextData.b = value;
        f(newContextData);
    }

    function saveC(value) {
        const newContextData = Object.create(contextData);
        newContextData.c = value;
        f(newContextData);
    }

    function saveX(value) {
        const newContextData = Object.create(contextData);
        newContextData.x = value;
        f(newContextData);
    }

    function saveSemn(value) {
        const newContextData = Object.create(contextData);
        newContextData.semn = value;
        f(newContextData);
    }

    // Update context with local variables
    function saveAllData(a, b, c, x, semn, result) {
        const newContextData = Object.create(contextData);
        newContextData.a = a;
        newContextData.b = b;
        newContextData.c = c;
        newContextData.x = x;
        newContextData.semn = semn;
        newContextData.result = result;
        setContextData(newContextData);
    }

    // Local function
    function f(data) {
        let resultArray = [];

        if (contextData.semn === 'pozitiv') {

            for (let i = 0; i < contextData.x.length; i++) {
                resultArray.push(contextData.a * contextData.x[i] + contextData.b * contextData.x[i] + contextData.c * contextData.x[i]);
            }
        } else {
            for (let i = 0; i < contextData.x.length; i++) {
                resultArray.push(-1 * contextData.a * contextData.x[i] - contextData.b * contextData.x[i] - contextData.c * contextData.x[i]);
            }
        }
        data.result = resultArray;

        // Update context data
        setContextData(data);

        // Update local storage
        localStorage.setItem('a', contextData.a);
        localStorage.setItem('b', contextData.b);
        localStorage.setItem('c', contextData.c);
        localStorage.setItem('x', contextData.x);
        localStorage.setItem('semn', contextData.semn);
        localStorage.setItem('result', contextData.result);
    }

    // Context export for all components
    return (
        <Context.Provider value={{
            data: contextData,
            saveA: saveA,
            saveB: saveB,
            saveC: saveC,
            saveX: saveX,
            saveSemn: saveSemn,
            saveAllData: saveAllData
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider };