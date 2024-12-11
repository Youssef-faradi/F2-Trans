import React, { createContext, useState } from "react"


export const MyContext = createContext()

export const MyProvider = ({ children }) => {

    const [basket, setbasket] = useState([])


    return (
        <>

            <MyContext.Provider value={{ basket, setbasket }} >
                {children}
            </MyContext.Provider>

        </>
    )


}