import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router";

import auth from '../Firebase/Firebase.config';
import { AuthContext } from '../Provider/AuthProvieder';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { setUser, handleGoogleSignin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const pass = e.target.password.value;

        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);

                navigate('/profile');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const googleSignin = () => {
        handleGoogleSignin()
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate('/profile');
            })
            .catch(err => console.log(err));
    };

    const handleForget = () => {
        navigate(`/forget/${email}`);
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="label">Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                name='email'
                                type="email"
                                className="input"
                                placeholder="Email"
                            />
                            <label className="label">Password</label>
                            <input
                                name='password'
                                type="password"
                                className="input"
                                placeholder="Password"
                            />
                            <div>
                                <button
                                    type="button"
                                    onClick={handleForget}
                                    className="link link-hover"
                                >
                                    Forgot password?
                                </button>
                            </div>
                            <button
                                type="button"
                                onClick={googleSignin}
                                className='btn'
                            >
                                <FcGoogle />
                            </button>
                            <div>
                                <span>Don't have an account? </span>
                                <Link to={'/signup'} className='text-blue-600'>Register</Link>
                            </div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
