import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvieder';
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

const Register = () => {
    const { registerWithEmailPassword, setUser, user, handleGoogleSignin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [upazilas, setUpazilas] = useState([])
    const [districts, setDistricts] = useState([])
    const [district, setDistrict] = useState('')
    const [upazila, setUpazila] = useState('')

    useEffect(() => {
        axios.get('/upazila.json')
            .then(res => {
                setUpazilas(res.data.upazilas)

            })
        axios.get('/district.json')
            .then(res => {
                setDistricts(res.data.districts)
            })
    }, [])

    console.log(districts);





    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const pass = e.target.password.value;
        const name = e.target.name.value;
        const blood = e.target.blood.value;
        const photourl = e.target.photourl;
        const file = photourl.files[0]


        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;

        if (pass.length < 6) {
            return alert("Password must be at least 6 characters");
        }
        if (!uppercase.test(pass)) {
            return alert("Password must contain at least one uppercase letter");
        }
        if (!lowercase.test(pass)) {
            return alert("Password must contain at least one lowercase letter");
        }
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=e75b91fb05719ebc8691348952e2074a`, { image: file }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })


        const mainPhotoUrl = res.data.data.display_url
        const formData = {
            blood,
            email,
            pass,
            name,
            mainPhotoUrl,
            district,
            upazila

        }
        console.log(formData);


        if (res.data.success == true) {
            registerWithEmailPassword(email, pass)
                .then((userCredential) => {
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: mainPhotoUrl,
                    })
                        .then(() => {
                            setUser(userCredential.user);
                            axios.post('http://localhost:5000/users', formData)
                                .then(res => {
                                    console.log(res.data);

                                })
                                .catch(err => {
                                    console.log(err);

                                })
                            navigate('/');
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch(err => {
                    console.log(err);
                });
        }


    };

    console.log(user);

    const googleSignUp = () => {
        handleGoogleSignin()
            .then(result => {
                const user = result.user;
                setUser(user);

                // ✅ Navigate to profile after successful Google sign up
                navigate('/profile');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="label">Name</label>
                            <input
                                name='name'
                                type="text"
                                className="input"
                                placeholder="Your full name"
                                required
                            />

                            <label className="label">PhotoUrl</label>
                            <input
                                name='photourl'
                                type="file"
                                className="input"
                                placeholder="Enter your photo url"
                            />
                            <select name='blood' defaultValue="Choose Blood Group" className="select">
                                <option disabled={true}>Choose Blood Group</option>
                                <option value="">Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>

                            </select>
                            <select value={district} onChange={(e) => setDistrict(e.target.value)} className='select'>
                                <option disabled selected value=''>Select Your District</option>
                                {
                                    districts.map(d =>
                                        <option value={d?.name} key={d.id}>{d?.name}</option>)
                                }
                            </select>
                            <select value={upazila} onChange={(e) => setUpazila(e.target.value)} className='select'>
                                <option disabled selected value=''>Select Your Upazila</option>
                                {
                                    upazilas.map(u =>
                                        <option value={u?.name} key={u.id}>{u?.name}</option>)
                                }
                            </select>
                            <label className="label">Email</label>
                            <input
                                name='email'
                                type="email"
                                className="input"
                                placeholder="Email"
                                required
                            />

                            <label className="label">Password</label>
                            <input
                                name='password'
                                type="password"
                                className="input"
                                placeholder="Password"
                                required
                            />

                            <div>
                                <a className="link link-hover">Forgot password?</a>
                            </div>

                            <button
                                type="button"
                                onClick={googleSignUp}
                                className='btn'
                            >
                                <FcGoogle />
                            </button>

                            <div>
                                <span>Already have an account? </span>
                                <Link to={'/LogIn'} className='text-blue-600'>Login</Link>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-neutral mt-4"
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
