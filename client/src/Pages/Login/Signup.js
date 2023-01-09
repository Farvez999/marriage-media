import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { useToken } from '../../hooks/useToken';

const Signup = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user, SignUp, updateUser, googleLogin } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('');

    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail)
    console.log(user)

    const googleProvider = new GoogleAuthProvider();

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";


    if (token) {
        navigate('/')
    }

    const handleSignUp = data => {
        console.log(data)
        setSignUpError('')


        SignUp(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user)

                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUserDasboard(data.name, data.email)
                    }).catch((error) => {
                        console.log(error)
                    });
                toast.success('Successfully SignUp!')
            })
            .catch((error) => {
                console.log(error)
                setSignUpError(error.message)
            });
    }

    const saveUserDasboard = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email)
            })
    }


    // const handleGoogleLogin = () => {
    //     const role = 'Buyer';
    //     googleLogin(googleProvider)
    //         .then((result) => {
    //             const user = result.user;
    //             saveUserDasboard(user.displayName, user.email, role)
    //             console.log(user)
    //             navigate(from, { replace: true });
    //         }).catch((error) => {
    //             console.log(error.message)
    //         });
    // }
    const handleGoogleLogin = () => {

        // setLoader(true)
        googleLogin()
            .then((result) => {
                const user = result.user;
                const role = 'Buyer'
                saveUserDasboard(user.displayName, user.email, role);
                // setCreateUserEmail(user?.email);
                // setLoader(false);


            }).catch((error) => {

                const errorMessage = error.message;
                toast.error(errorMessage)
                // setLoader(false)

            });
    }

    return (
        <div>
            <div className='h-full flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-xl text-center'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: "Name Address is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: "Email Address is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                        </div>

                        {/* <div className="form-control w-full max-w-xs mt-4">
                        <select {...register("role")} className="select select-bordered w-full max-w-xs">

                            <option>Seller</option>
                            <option>Buyer</option>
                        </select>

                    </div> */}




                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: "Password Address is required", minLength: { value: 6, message: 'Passwor must be 6 characters or longer' }, pattern: {
                                    value: /(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]/, message: "Passwor must uper & lower case letters or numbers"
                                }
                            })} type="password" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                            <label className="label">
                                <span className="label-text">Forgot Password ?</span>
                            </label>
                        </div>


                        <input className='btn btn-accent w-full text-white' value="Sign Up" type="submit" />
                        {
                            signUpError && <p className='text-red-500'>{signUpError}</p>
                        }
                        <p>Already have an Account <Link className='text-secondary' to="/login">Please Login</Link></p>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </form>
                </div>
            </div>


            <div >
                <div className="card-body max-w-4xl mx-auto">
                    <h1 className='text-5xl font-bold text-center my-5'>Register</h1>
                    <form  >
                        {/* Candidate Name */}
                        <div className="grid lg:grid-cols-2 md:grid-2 sm:grid-1 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Candidate First Name</span>
                                </label>
                                <input type="text" placeholder="Candidate First Name" {...register("title", {
                                    required: "Name is required"

                                })} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Candidate Last Name</span>
                                </label>
                                <input type="text" placeholder="Candidate Last Name" {...register("price", {
                                    required: "Price is required"

                                })} className="input input-bordered" />
                            </div>
                        </div>

                        {/* Candidate Age */}
                        <div className="grid lg:grid-cols-2 md:grid-2 sm:grid-1 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Candidate Age</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Candidate Height</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>122 cm / 4'0"</option>
                                    <option>123 cm / 4'0"</option>
                                    <option>124 cm / 4'1"</option>
                                    <option>125 cm / 4'1"</option>
                                    <option>125 cm / 4'1"</option>
                                    <option>126 cm / 4'1"</option>
                                    <option>127 cm / 4'2"</option>
                                    <option>128 cm / 4'2"</option>
                                    <option>129 cm / 4'3"</option>
                                    <option>130 cm / 4'3"</option>
                                    <option>131 cm / 4'3"</option>
                                </select>
                            </div>
                        </div>

                        {/* Gender */}
                        <div className="grid lg:grid-cols-3 md:grid-2 sm:grid-1 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Marital Status</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>Doesn't Matter</option>
                                    <option>Never Married</option>
                                    <option>Divorced</option>
                                    <option>Widowed</option>
                                    <option>Separated</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Country of Residence</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>Australia</option>
                                    <option>USA</option>
                                    <option>Bangladesh</option>
                                    <option>India</option>
                                    <option>Pakisthan</option>
                                </select>
                            </div>
                        </div>

                        {/* Profession */}
                        <div className="grid lg:grid-cols-2 md:grid-2 sm:grid-1 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profession</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>Accountant</option>
                                    <option>Advertising Professional</option>
                                    <option>Advocate</option>
                                    <option>Air Service</option>
                                    <option>Architect</option>
                                    <option>Auditor</option>
                                    <option>Banker</option>
                                    <option>Barrister</option>
                                    <option>BCS Cadre</option>
                                    <option>Beautician</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Education</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>MBA</option>
                                    <option>Bachelor</option>
                                    <option>BBA</option>
                                    <option>Diploma</option>
                                    <option>HSC</option>
                                    <option>SSC</option>
                                    <option>Dakhil</option>
                                    <option>Alim</option>
                                    <option>Fajil</option>
                                    <option>Kamil</option>
                                </select>
                            </div>
                        </div>

                        {/* Your relationship to Candidate */}
                        <div className="grid lg:grid-cols-1 md:grid-1 sm:grid-1 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your relationship to Candidate</span>
                                </label>
                                <select className="select w-full border-gray-400">
                                    <option disabled selected>
                                        Select
                                    </option>
                                    <option>Brother</option>
                                    <option>Sister</option>
                                    <option>Family</option>
                                    <option>Friends</option>
                                    <option>Parent</option>
                                    <option>Self</option>

                                </select>
                            </div>
                        </div>

                        {/* Your Name */}
                        <div className="grid lg:grid-cols-2 md:grid-2 sm:grid-1 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your First Name</span>
                                </label>
                                <input type="text" placeholder="Your First Name" {...register("title", {
                                    required: "Name is required"

                                })} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Last Name</span>
                                </label>
                                <input type="text" placeholder="Your Last Name" {...register("price", {
                                    required: "Price is required"

                                })} className="input input-bordered" />
                            </div>

                        </div>

                        {/* Email and Phone */}
                        <div className="grid lg:grid-cols-2 md:grid-2 sm:grid-1 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" {...register("title", {
                                    required: "Name is required"

                                })} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" placeholder="Phone Number" {...register("price", {
                                    required: "Price is required"

                                })} className="input input-bordered" />
                            </div>

                        </div>

                        {/* Password */}
                        <div className="grid lg:grid-cols-2 md:grid-2 sm:grid-1 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Password" {...register("title", {
                                    required: "Name is required"

                                })} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Reconfirm Password</span>
                                </label>
                                <input type="text" placeholder="Reconfirm Password" {...register("price", {
                                    required: "Price is required"

                                })} className="input input-bordered" />
                            </div>
                        </div>

                        <div className='my-4'>
                            <input className='btn btn-accent w-full text-white' value="Sign Up" type="submit" />
                            {
                                signUpError && <p className='text-red-500'>{signUpError}</p>
                            }
                            <p>Already have an Account <Link className='text-secondary' to="/login">Please Login</Link></p>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;