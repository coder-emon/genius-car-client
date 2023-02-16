import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import app from "../Config/firebase.config";
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)


    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signUp = (emai, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, emai, password)
    }
    const login = (emai, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, emai, password)
    }
    const logout = () => {
        return signOut(auth)
    }
    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        googleSignIn,
        signUp,
        login,
        logout,
        updateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}
export default AuthProvider