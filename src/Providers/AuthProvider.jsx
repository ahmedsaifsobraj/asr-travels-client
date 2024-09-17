import React, { createContext, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [users,setUsers]=useState(null);
    const [loader,setLoader]=useState(null);

    const createUser = (email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle =()=>{
        setLoader(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth,provider);
    }

    const userInfo ={
        users,
        loader,
        createUser,
        signInWithGoogle,
        signIn
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
