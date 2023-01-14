import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashBoardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 text-base-content">

                        {/* {
                            !isSeller && !isAdmin && <>
                                <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                                <li><Link to='/dashboard/myWishlists'>My Wishlists</Link></li>
                            </>
                        }


                        {
                            isSeller && <>
                                <li><Link to="/dashboard/addProducts">Add Products</Link></li>
                                <li><Link to="/dashboard/sellerProducts">My Products</Link></li>
                            </>
                        } */}

                        {
                            isAdmin && <>
                                <li><Link to={`/dashboard/addPackage`}>Add A Package</Link></li>
                                <li><Link to={`/dashboard/myPackage`}>My Package</Link></li>
                                <li><Link to={`/dashboard/addPriviledges`}>Add A Priviledges</Link></li>
                                <li><Link to={`/dashboard/addAboutUs`}>Add A About Us</Link></li>
                                <li><Link to={`/dashboard/allSeller`}>All Seller</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;