
import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const signInUsingGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);

            })

            .finally(() => setLoading(false));
    }
    useEffect(() => {

        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {

            })
            .finally(() => setLoading(false));
    }
    return {
        signInUsingGoogle,
        loading,
        user,
        logOut
    }
};

export default useFirebase;