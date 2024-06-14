
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';
import axios from "axios";



export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    
  // Google Login
  const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

// Sign in 
const creatUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

// Sign Out
const logIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// LogOut
const logOut =()=>{
    setLoading(true)
    return signOut(auth)
}

  // save user
  const saveUserDB = async user => {
    const currentUser = {
      email: user?.email,
      photo: user?.photoURL,
      role: 'student',
      status: 'Verified',
    }
    const { data } = await axios.put(
      `${import.meta.env.VITE_API_URL}/user/api/creater`,
      currentUser
    )
    return data
  }
// obserber
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        if (currentUser) {
            saveUserDB(currentUser)
        }
        setLoading(false)
    })
    return () =>{
        unSubscribe();
    }
},[])


    const authInfo = {
        user,
        setUser,
        loading,
        googleLogin,
        creatUser,
        logIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
// props-type validation
AuthProvider.propTypes = {
    children: PropTypes.array,
};
export default AuthProvider;