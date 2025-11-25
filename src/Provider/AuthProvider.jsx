import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext= createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password);
    }
    const googleSignIn = () => {
        return signInWithEmailAndPassword(auth,GoogleAuthProvider);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

      const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=>
    {
      const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            return () => unsubscribe();
        })
    },[])
    const authInfo = {
        user, 
        setUser,
        createUser,
        googleSignIn,
        signInUser,
        logOut
        
    }

    return <AuthContext value={authInfo}> 
     {children}
     </AuthContext>
};

export default AuthProvider;