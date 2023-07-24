import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
export const AuthContext =createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    const signupEmailPass =(email,password)=>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const googlesignup =(googlrProvider)=>{
        return signInWithPopup(auth,googlrProvider)
    }
    const gitsignup =(gitProvider)=>{
        return signInWithPopup(auth,gitProvider)
    }
    const updateUser=(name,photo)=>{
        return  updateProfile(auth.currentUser, {
              displayName: name, photoURL: photo
            })
         }

         const login =(email,password)=>{
            setLoading(false)
            return signInWithEmailAndPassword(auth,email,password)
         }

        //  hold loin 
        useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth,userInfo=>{  
             setUser(userInfo);
             setLoading(false);
             });
             return ()=> {
                unSubscribe();
             }
           },[])

        //   logout 
        const logOut =()=>{
            return signOut(auth)
        }
    const authInfo ={
        user,
        signupEmailPass,
        updateUser,
        login,
        logOut,
        loading,
        googlesignup,
        gitsignup

    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;