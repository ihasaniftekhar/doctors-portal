import { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";


// initialize firebase app
initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                })
                history.replace('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const destination = location.state?.from || '/home';
                history.replace(destination);
                setAuthError('');
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));

    }

    const signInWithGoogle = (location, history) => {
        signInWithPopup(auth, googleProvider)
            .then((user) => {
                setAuthError('');
                setIsLoading(false);
                saveUser(user.email, user.displayName, 'PUT');
                const destination = location.state?.from || '/home';
                history.replace(destination);
                // ...
            }).catch((error) => {
            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetch(`https://dry-sierra-02716.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email]);

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.message)
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://dry-sierra-02716.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    // observer user state
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then((idToken) => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });

        return () => unsubscribe;
    }, [])

    return {
        user,
        isLoading,
        admin,
        token,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    }
}

export default useFirebase;