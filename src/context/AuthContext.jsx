import { createContext, useContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { setDoc, doc } from "firebase/firestore"; 
import { GoogleAuthProvider,signInWithPopup, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext()

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({})

  function signUp(email, password){
    createUserWithEmailAndPassword(auth, email, password)
    setDoc(doc(db, 'users', email), {
      savedDeals: []
    })
  }

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  }

  function logIn(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logOut(){
    return signOut(auth)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    }
  },[])

  return (
    <AuthContext.Provider value={{googleSignIn, signUp, logIn, logOut, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export function userAuth() {
  return useContext(AuthContext)
}
