import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext= createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password);
    }
    const googleSignIn = () => {
        return signInWithEmailAndPassword(auth,GoogleAuthProvider);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser,updateData );
    }

      const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=>
    {
      const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            return () => unsubscribe();
        })
    },[])
    const authInfo = {
        user, 
        setUser,
        createUser,
        googleSignIn,
        signInUser,
        logOut,
        loading,
        setLoading,
        updateUser,
        
    }

    return <AuthContext value={authInfo}> 
     {children}
     </AuthContext>
};

export default AuthProvider;