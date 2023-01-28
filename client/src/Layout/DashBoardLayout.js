import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import AddIcon from "@mui/icons-material/Add";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import EditIcon from "@mui/icons-material/Edit";
import ContactsIcon from "@mui/icons-material/Contacts";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const DashBoardLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [profiles, setProfiles] = useState([]);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        {/* <div className="grid grid-cols-3 gap-16 place-content-stretch h-40 mt-10 px-8">
            <div className="card w-50 bg-neutral text-neutral-content">
              <div className="card-body items-center text-center">
                <h2 className="card-title">All Users</h2>
               
                <div className="card-actions justify-end mt-5">
                  <button className="btn btn-primary">View Users</button>
                  
                </div>
              </div>
            </div>
            <div className="card w-50 bg-neutral text-neutral-content">
              <div className="card-body items-center text-center">
                <h2 className="card-title">My Packages</h2>
                <p>We Have Total Packages</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Packages</button>
                 
                </div>
              </div>
            </div>
            <div className="card w-50 bg-neutral text-neutral-content">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Create Your package</h2>
                
                <div className="card-actions justify-end mt-5">
                <Link to={`/dashboard/addPackage`}> <button className="btn btn-primary">Create Package</button></Link>
                 
                  
                </div>
              </div>
            </div>
           



            
          </div> */}
        <div className="drawer-content">
          <Outlet></Outlet>
          
        </div>
        <div className="flex space-x-3 ">
          <div>
            <ul className="menu p-4 w-72 text-base-content">
              {isAdmin && (
                <>
                  {/* sidebar */}

                  <div className="flex flex-col h-full p-3 w-60 dark:bg-gray-900 dark:text-gray-100 border-normal hover:border-solid shadow-2xl">
                    <div className="space-y-3  font-semibold">
                      <div className="flex items-center justify-between bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white ">
                        <h2 className="ml-5">Dashboard</h2>
                        <button className="p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 fill-current dark:text-gray-100"
                          >
                            <rect width="352" height="32" x="80" y="96"></rect>
                            <rect width="352" height="32" x="80" y="240"></rect>
                            <rect width="352" height="32" x="80" y="384"></rect>
                          </svg>
                        </button>
                      </div>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                          <button
                            type="submit"
                            className="p-2 focus:outline-none focus:ring"
                          ></button>
                        </span>
                      </div>
                      <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                          <li className="rounded-sm">
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="flex items-center p-2 space-x-3 rounded-md"
                            >
                              <HomeIcon />

                              <span>
                                <Link to={`/`}>Home</Link>
                              </span>
                            </a>
                          </li>
                          <li className="rounded-sm">
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="flex items-center p-2 space-x-3 rounded-md"
                            >
                              <SearchOutlinedIcon />

                              <span>
                                <Link to={`/search`}>Search</Link>
                              </span>
                            </a>
                          </li>
                          <li className="rounded-sm">
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="flex items-center p-2 space-x-3 rounded-md"
                            >
                              <AddIcon />
                              <span>
                                <Link to={`/dashboard/addPackage`}>
                                  Create Package
                                </Link>
                              </span>
                            </a>
                          </li>
                          <li className="rounded-sm">
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="flex items-center p-2 space-x-3 rounded-md"
                            >
                              <BackupTableIcon />

                              <span>
                                <Link to={`/dashboard/myPackage`}>
                                  My Packages
                                </Link>
                              </span>
                            </a>
                          </li>
                          <li className="rounded-sm dark:bg-gray-800 dark:text-gray-50">
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="flex items-center p-2 space-x-3 rounded-md"
                            >
                              <AddModeratorIcon />
                              <span>
                                <Link to={`/dashboard/addPriviledges`}>
                                  Add Priviledges
                                </Link>
                              </span>
                            </a>
                          </li>
                          <li className="rounded-sm">
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="flex items-center p-2 space-x-3 rounded-md"
                            >
                              <EditIcon />
                              <span>
                                <Link to={`/dashboard/addAboutUs`}>
                                  Update Info
                                </Link>
                              </span>
                            </a>
                          </li>
                          <li className="rounded-sm">
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="flex items-center p-2 space-x-3 rounded-md"
                            >
                              <ContactsIcon />
                              <span>
                                <Link to={`/dashboard/allSeller`}>
                                  All User Profile
                                </Link>
                              </span>
                            </a>
                          </li>
                          <li className="rounded-sm">
                            <a
                              rel="noopener noreferrer"
                              href="#"
                              className="flex items-center p-2 space-x-3 rounded-md"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-5 h-5 fill-current dark:text-gray-400"
                              >
                                <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                <rect
                                  width="32"
                                  height="64"
                                  x="256"
                                  y="232"
                                ></rect>
                              </svg>
                              <span>
                                <button onClick={handleLogOut}>LogOut</button>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                      <div className="img gap-10">
                        <Link to={"/profile"}>
                          <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-2">
                              <img src={profiles?.img} alt="" />
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div>
                        <h2 className="text-lg font-semibold">
                          {profiles?.cantidateFirstName +
                            " " +
                            profiles?.cantidateLastName}
                        </h2>
                        <span className="flex items-center space-x-1">
                          <a
                            rel="noopener noreferrer"
                            href="#"
                            className="text-xs semi-bold hover:underline dark:text-gray-400"
                          >
                            <Link to={`/profile`}>view Profile</Link>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </ul>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
