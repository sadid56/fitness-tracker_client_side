/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //create user
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update profile
    const profileUpdate =(name, photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
        })
    }
    // continue with google
    const provider = new GoogleAuthProvider()
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // sign in
    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //log out
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscibe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unSubscibe()
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        profileUpdate,
        signIn,
        logOut,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
 
export default AuthProvider;