import React from "react";
import Navbar from "./Navbar";

const NavHome = () => {
  return (
    <div
      className="min-h-screen bg-base-200 "
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      {/* <Navbar></Navbar> */}
      <div className="flex justify-end mr-6 p-2 gap-2">
        <div className="bg-white text-gray-500">
          <p className="mx-2">+880 1776711862</p>
        </div>
        <div className="bg-white text-gray-500">
          <p className="mx-2">+880 1640184044</p>
        </div>
      </div>
      <Navbar></Navbar>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-black bg-transparen75 bg-opacity-80">
          <div className="card-body">
            <div className="form-control">
            <span className="label-text text-white text-left ">Looking For</span>
              <select className="select w-full max-w-xs">
                <option disabled selected>
                  Looking For
                </option>
                <option>Bride</option>
                <option>Groom</option>
                
              </select>
            </div>
            <span className="label-text text-white text-left">Age</span>
            <div className="form-control grid grid-cols-2 gap-2">
            
                <div className="left ">
                
              <select className="select w-full max-w-xs">
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
                <div className="right">
               
              <select className="select w-full max-w-xs">
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
           
            </div>
            <div className="form-control">
            <span className="label-text text-white text-left ">Country</span>
              <select className="select w-full max-w-xs">
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
           
           
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Profile Id</span>
              </label>
              <input type="text" className="input input-bordered" />
              
            </div>
            <div className="form-control">
            <span className="label-text text-white text-left ">Photo</span>
              <select className="select w-full max-w-xs">
                <option disabled selected>
                  All Profiles
                </option>
                <option></option>
                <option>profiles with photo only</option>
               
              </select>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white bg-green-500">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavHome;
