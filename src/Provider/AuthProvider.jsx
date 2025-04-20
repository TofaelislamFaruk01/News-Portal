import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';


const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    console.log(loading,user);

    const createNewUser=(email,password)=>{
        setLoading(true);

        return createUserWithEmailAndPassword(auth,email,password);

    }

    const logOut=()=>{
        setLoading(false);

       return signOut(auth);
        
    }
    const logIn=(email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUserProfile=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);

    }

    

    const authInfo={
        user,
        setUser,
        createNewUser,
        logOut,
        logIn,
        loading,
        updateUserProfile
    }

    useEffect(()=>{

      const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
            return ()=>{
                unSubscribe();

            }

        })



    },[])



    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;