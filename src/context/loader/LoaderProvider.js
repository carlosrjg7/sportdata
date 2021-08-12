import React, { createContext, useState } from 'react'

export const  LoaderContext  = createContext();

const LoaderProvider = (props) => {

    const [carga, setCarga] = useState(true);

    return (
        <LoaderContext.Provider
            value={{
                carga,
                setCarga
            }}
        >
            {props.children}
        </LoaderContext.Provider>
    )
}

export default LoaderProvider
