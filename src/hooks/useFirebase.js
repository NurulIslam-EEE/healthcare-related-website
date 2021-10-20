
import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    console.log(password, email);
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    const createUser = () => {
        return createUserWithEmailAndPassword(auth, email, password);

    };

    const signin = () => {
        return signInWithEmailAndPassword(auth, email, password);
    };

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
    }, []);

    const setUserProfile = () => {
        console.log(name);
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://static.dw.com/image/19388520_303.jpg"
        })
            .then(() => {

            }).catch((error) => {

            });
    };

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {

            })
            .finally(() => setLoading(false));
    };

    return {
        signInUsingGoogle,
        loading,
        user,
        logOut,
        setPassword,
        setEmail,
        createUser,
        signin,
        setLoading,
        error,
        setError,
        setUserProfile,
        setName
    }
};

export default useFirebase;