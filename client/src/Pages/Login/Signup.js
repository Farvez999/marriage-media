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

    const handleSignUp = (data) => {
        // setLoader(true)
        const imgHostKey = `1faa49df03df506c6697717902b0f372`

        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const userInfo = {
                        displayName: data.cantidateFirstName + data.cantidateLastName,
                        photoURL: imgData.data.url,

                    }

                    // create user
                    SignUp(data.email, data.password)
                        .then((result) => {
                            const user = result.user;
                            console.log(user)

                            // const userInfo = {
                            //     displayName: data.cantidateFirstName + data.cantidateLastName
                            // }
                            console.log(userInfo);

                            updateUser(userInfo)
                                .then(() => {
                                    saveUserDasboard(data.cantidateFirstName, data.cantidateLastName, data.cantidateAge, data.cantidateHeight, data.cantidateGender, data.cantidateMaritalStatus, data.cantidateCountry, data.cantidateProfession, data.cantidateEducation, data.cantidateRelationCandidate, data.yourFirstName, data.yourLastName, data.phone, data.email, imgData.data.url, data.userType)

                                }).catch((error) => {
                                    console.log(error)
                                });
                            toast.success('Successfully SignUp!')
                        })
                        .catch((error) => {
                            console.log(error)
                            setSignUpError(error.message)
                        });
                    // createUser(data.email, data.password)
                    //     .then((result) => {
                    //         const user = result.user;

                    //         // update user profile
                    //         updateUserProfile(userInfo)
                    //             .then(() => {
                    //                 saveUser(data.name, data.email, data.role, imgData.data.url);


                    //             })
                    //             .catch(err => {
                    //                 toast.error(err.message)
                    //                 setLoader(false)
                    //             });

                    //     }).catch((error) => {

                    //         const errorMessage = error.message;
                    //         toast.error(errorMessage)
                    //         setLoader(false)


                    //     });

                }
            });



    }


    // const handleSignUp = data => {
    //     console.log(data)
    //     setSignUpError('')


    //     SignUp(data.email, data.password)
    //         .then((result) => {
    //             const user = result.user;
    //             console.log(user)

    //             const userInfo = {
    //                 displayName: data.cantidateFirstName + data.cantidateLastName
    //             }
    //             console.log(userInfo);

    //             updateUser(userInfo)
    //                 .then(() => {
    //                     saveUserDasboard(data.cantidateFirstName, data.cantidateLastName, data.cantidateAge, data.cantidateHeight, data.cantidateGender, data.cantidateMaritalStatus, data.cantidateCountry, data.cantidateProfession, data.cantidateEducation, data.cantidateRelationCandidate, data.yourFirstName, data.yourLastName, data.phone, data.email, data.userType)

    //                 }).catch((error) => {
    //                     console.log(error)
    //                 });
    //             toast.success('Successfully SignUp!')
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //             setSignUpError(error.message)
    //         });
    // }


    const saveUserDasboard = (cantidateFirstName, cantidateLastName, cantidateAge, cantidateHeight, cantidateGender, cantidateMaritalStatus, cantidateCountry, cantidateProfession, cantidateEducation, cantidateRelationCandidate, yourFirstName, yourLastName, phone, email, img) => {
        const userType = 'free';
        const user = { cantidateFirstName, cantidateLastName, cantidateAge, cantidateHeight, cantidateGender, cantidateMaritalStatus, cantidateCountry, cantidateProfession, cantidateEducation, cantidateRelationCandidate, yourFirstName, yourLastName, phone, email, img, userType };
        // console.log(user);

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
            {/* <div className='h-full flex justify-center items-center'>
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
            </div> */}


            <div >
                <div className="card-body max-w-4xl mx-auto">
                    <h1 className='text-5xl font-bold text-center my-5'>Register</h1>
                    <form onSubmit={handleSubmit(handleSignUp)} >
                        {/* Candidate Name */}
                        <div className="grid lg:grid-cols-2 md:grid-2 sm:grid-1 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Candidate First Name</span>
                                </label>
                                <input type="text" placeholder="Candidate First Name" {...register("cantidateFirstName", { required: "Candidate First Name is required" })} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Candidate Last Name</span>
                                </label>
                                <input type="text" placeholder="Candidate Last Name" {...register("cantidateLastName", { required: "Candidate Last Name is required" })} className="input input-bordered" />
                            </div>
                        </div>

                        {/* Candidate Age */}
                        <div className="grid lg:grid-cols-2 md:grid-2 sm:grid-1 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Candidate Age</span>
                                </label>
                                <select className="select w-full border-gray-400" {...register("cantidateAge", { required: "Candidate Age is required" })} >
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
                                <select className="select w-full border-gray-400" {...register("cantidateHeight", { required: "Candidate Height is required" })} >
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
                                <select className="select w-full border-gray-400" {...register("cantidateGender", { required: "Candidate Gender is required" })} >
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
                                <select className="select w-full border-gray-400" {...register("cantidateMaritalStatus", { required: "Candidate Marital Status is required" })} >
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
                                <select className="select w-full border-gray-400" {...register("cantidateCountry", { required: "Candidate Country is required" })} >
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
                                <select className="select w-full border-gray-400" {...register("cantidateProfession", { required: "Candidate Profession is required" })} >
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
                                <select className="select w-full border-gray-400" {...register("cantidateEducation", { required: "Candidate Education is required" })} >
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
                                <select className="select w-full border-gray-400" {...register("cantidateRelationCandidate", { required: "Candidate Your relationship to Candidate is required" })} >
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
                                <input type="text" placeholder="Your First Name" {...register("yourFirstName", {
                                    required: "Your First Name is required"

                                })} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Last Name</span>
                                </label>
                                <input type="text" placeholder="Your Last Name" {...register("yourLastName", {
                                    required: "Your Last Name is required"
                                })} className="input input-bordered" />
                            </div>

                        </div>

                        {/* Email and Phone */}
                        <div className="grid lg:grid-cols-2 md:grid-2 sm:grid-1 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" {...register("email", {
                                    required: "Email is required"

                                })} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" placeholder="Phone Number" {...register("phone", {
                                    required: "Phone is required"

                                })} className="input input-bordered" />
                            </div>

                        </div>

                        {/* Password */}
                        <div className="grid lg:grid-cols-2 md:grid-2 sm:grid-1 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Password" {...register("password", {
                                    required: "Password is required"

                                })} className="input input-bordered" />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Reconfirm Password</span>
                                </label>
                                <input type="text" placeholder="Reconfirm Password" {...register("price", {
                                    required: "Price is required"

                                })} className="input input-bordered" />
                            </div> */}
                        </div>

                        {/* Image  */}
                        <div className="form-control mt-5">
                            <label htmlFor="dropzone-file" className={errors.img ? "flex flex-col items-center justify-center w-full border-2 border-red-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                : "flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"}>
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> User Images</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or jpeg </p>
                                </div>
                                <input id="dropzone-file" {...register("img", {
                                    required: "img is required",
                                })} type="file" className="hidden" accept=".png, .jpg, .jpeg" />
                            </label>
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