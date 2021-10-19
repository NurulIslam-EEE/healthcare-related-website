import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useService from '../hooks/useService';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const service = useService();
    return (
        <AuthContext.Provider value={[allContext, service]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;