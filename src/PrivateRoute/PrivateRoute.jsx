import React, { createContext, useState } from 'react';
import auth from '../../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const AuthContext = createContext(null);
const PrivateRoute = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const createUser = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    };
     const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
     }
     const logOut = () =>{
        setLoading(true);
       return signOut(auth);
     };
     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setLoading(false);
        setUser(currentUser);
        return ()=>unSubscribe();
     })

    const authInto = {createUser, loginUser, logOut, user, loading}
    return (
        <AuthContext.Provider value={authInto}>
            {children}
        </AuthContext.Provider>
    );
};

export default PrivateRoute;