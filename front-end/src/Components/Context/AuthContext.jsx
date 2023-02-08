import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [account, setAccount] = useState()
    return (
        <AuthContext.Provider value={{ account, setAccount }}>
            {children}
        </AuthContext.Provider>
    )
}