
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
    console.log(password, email);
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;

            });
    }

    const signin = () => {
        return signInWithEmailAndPassword(auth, email, password);
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

    const setUserProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {

        }).catch((error) => {

        });
    }
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {

            })
            .finally(() => setLoading(false));
    }
    return {
        signInUsingGoogle,
        loading,
        user,
        logOut,
        setPassword,
        setEmail,
        createUser,
        signin,
        setLoading
    }
};

export default useFirebase;