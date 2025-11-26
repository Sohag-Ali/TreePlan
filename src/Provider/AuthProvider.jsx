import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext= createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email, password) => {
         setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }
    const googleSignIn = () => {
         setLoading(true);
        return signInWithEmailAndPassword(auth,GoogleAuthProvider);
    }

    const signInUser = (email, password) => {
         setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser,updateData );
    }
    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

      const logOut = () => {
        setLoading(true);
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
        signInWithGoogle,
        
    }

    return <AuthContext value={authInfo}> 
     {children}
     </AuthContext>
};

export default AuthProvider;