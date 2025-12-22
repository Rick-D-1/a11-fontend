import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvieder = ({ children }) => {
    // loading
    const [loading, setLoading] = useState(true);
    const [roleloading, setRoleLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [role, setRole] = useState('');
    const [UserStatus, setUserStatus] = useState('')

    const registerWithEmailPassword = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    // google
    const handleGoogleSignin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    console.log(user);

    useEffect(() => {
        if (!user) return;
        axios.get(`http://localhost:5000/users/role/${user.email}`)
            .then(res => {
                setRole(res.data.role);
                setUserStatus(res.data.status)
                setRoleLoading(false)
            })
    }, [user])




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unSubscribe()
        }

    }, [user])



    const authData = {
        registerWithEmailPassword,
        setUser,
        user,
        handleGoogleSignin,
        loading,
        role,
        roleloading,
        UserStatus
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvieder;