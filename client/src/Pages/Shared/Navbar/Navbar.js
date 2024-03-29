import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [profiles, setProfiles] = useState([]);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };

  const menuItem = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/about">About</Link>
      </li>
      <li className="font-semibold">
        <Link to="/package">Package</Link>
      </li>
      <li className="font-semibold">
        <Link to="/search">Search</Link>
      </li>
      <li className="font-semibold">
        <Link to="/contacts">Contacts</Link>
      </li>
      <li className="font-semibold">
        <Link to="/blog">Blog</Link>
      </li>

      {/* <li className='font-semibold'><Link to='/appoinment'>Appoinment</Link></li>
        <li className='font-semibold'><Link to='/reviews'>Reviews</Link></li>
        <li className='font-semibold'><Link to='/contactUs'>Contact Us</Link></li> */}
      {user?.uid ? (
        <>
          <li className="font-semibold">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="font-semibold">
            <button onClick={handleLogOut}>Sign Out</button>
          </li>
          <li className="font-semibold">
            <Link to="/profile">
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-2">
                  <img src={profiles?.img} alt="" />
                </div>
              </div>
            </Link>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
      )}
      {/* {
            user?.uid?.isAdmin &&
            <>
                <li className='font-semibold'><Link to='/dashboard'>Dashboard</Link></li>
            </>
        } */}
    </>
  );

  return (
    <div className=" bg-white sticky top-0 z-50">
      <div className="navbar flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Marriage Media
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItem}</ul>
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
