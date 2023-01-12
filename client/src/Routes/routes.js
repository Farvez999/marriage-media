import { createBrowserRouter } from "react-router-dom"
import AboutUs from "../Dashboard/Admin/AboutUs"
import AddPackage from "../Dashboard/Admin/AddPackage"
import AddPriviledges from "../Dashboard/Admin/AddPriviledges"
import AllSeller from "../Dashboard/User/AllSeller"
import DashBoardLayout from "../Layout/DashBoardLayout"
import Main from "../Layout/Main"
import About from "../Pages/About/About"
import Contacts from "../Pages/Contacts/Contacts"
import Blog from "../Pages/Home/Blog/Blog"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Login/Signup"
import Package from "../Pages/Package/Package"
import Profile from "../Pages/Profile/Profile"
import Search from "../Pages/Search/Search"
import SearchDetails from "../Pages/Search/SearchDetails"
import AdminRoute from "./AdminRoutes"
import PrivateRoutes from "./PrivateRoutes"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        //   errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/package',
                element: <Package />,
            },
            {
                path: '/search',
                element: <Search />,
            },
            {
                path: '/blog',
                element: <Blog/>,
            },
            {
                path: '/contacts',
                element: <Contacts />,
            },
            {
                path: '/about',
                element: <About/>,
            },
            {
                path: '/profile',
                element: <Profile/>,
            },
            {
                path: '/details/:id',
                element: <SearchDetails></SearchDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/searchProfile/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            // {
            //     path: "/categorie/:id",
            //     element: <PrivateRoutes><CategoryDetails></CategoryDetails></PrivateRoutes>,
            //     loader: ({ params }) =>
            //         fetch(
            //             `https://used-products-resale-server-vert.vercel.app/categorie/${params.id}`
            //         ),
            // },
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><AdminRoute><DashBoardLayout></DashBoardLayout></AdminRoute></PrivateRoutes>,
        // errorElement: <DisplayError></DisplayError>,
        children: [
            // {
            //     path: '/dashboard/myProducts',
            //     element: <MyProducts></MyProducts>
            // },
            // {
            //     path: '/dashboard/myWishlists',
            //     element: <MyWishlists></MyWishlists>
            // },
            // {
            //     path: '/dashboard/addProducts',
            //     element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            // },
            // {
            //     path: '/dashboard/sellerProducts',
            //     element: <SellerRoute><SellerProducts></SellerProducts></SellerRoute>
            // },

            {
                path: '/dashboard/allSeller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/addPackage',
                element: <AdminRoute><AddPackage></AddPackage></AdminRoute>
            },
            {
                path: '/dashboard/addPriviledges',
                element: <AdminRoute><AddPriviledges></AddPriviledges></AdminRoute>
            },
            {
                path: '/dashboard/addAboutUs',
                element: <AdminRoute><AboutUs></AboutUs></AdminRoute>
            },
            // {
            //     path: '/dashboard/allBuyer',
            //     element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            // },
            // {
            //     path: '/dashboard/adddoctor',
            //     element: <AdminRoutes><AddDoctor></AddDoctor></AdminRoutes>
            // },
            // {
            //     path: '/dashboard/managedoctors',
            //     element: <AdminRoutes><ManageDoctors></ManageDoctors></AdminRoutes>
            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://used-products-resale-server-vert.vercel.app/bookings/${params.id}`)
            // },

        ]
    },
    // {
    //     path: "*",
    //     element: <ErrorPage></ErrorPage>
    // },
])

export default router