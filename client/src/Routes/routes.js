import { createBrowserRouter } from "react-router-dom"
import AddPackage from "../Dashboard/Admin/AddPackage"
import AllSeller from "../Dashboard/User/AllSeller"
import DashBoardLayout from "../Layout/DashBoardLayout"
import Main from "../Layout/Main"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Login/Signup"
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
            // {
            //     path: '/blog',
            //     element: <Blog />,
            // },
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