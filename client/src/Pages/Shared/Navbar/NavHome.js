import React from 'react';
import Navbar from './Navbar';

const NavHome = () => {
    return (

        <div className="min-h-screen bg-base-200" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>

            {/* <Navbar></Navbar> */}
            <div className='flex justify-end mr-6 p-2 gap-2'>
                <div className='bg-white text-gray-500'><p className='mx-2'>+880 1776711862</p></div>
                <div className='bg-white text-gray-500'><p className='mx-2'>+880 1640184044</p></div>
            </div>
            <Navbar></Navbar>

            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>

                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>

    );
};

export default NavHome;