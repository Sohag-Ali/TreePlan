import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Page/Home";
import Details from "../Page/Details";
import Providers from "../Page/Providers";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Profile from "../Page/Profile";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Components/Loading";
import Books from "../Page/Books";
import Tips from "../Page/Tips";
import ErrorPage from "../Page/ErrorPage";
import About from "../Page/About";
import Contact from "../Page/Contact";




const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
         children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.JSON'),
                 hydrateFallbackElement: <Loading></Loading>,
                children: [
                    // {
                    //     path: '/tip',
                    //     element: <Tips></Tips>
                    // },
                    {
                        path: '/',
                        element: <Providers></Providers>,
                        loader: () => fetch('/providers.JSON'),
                        hydrateFallbackElement: <Loading></Loading>,
                    },
                ]
            },
            {
        path: '/skillDetails/:id',
        element: <PrivateRoute>
            <Details></Details>
        </PrivateRoute>,
        loader: async () => {
    const res = await fetch('/data.JSON');  
    const data = await res.json();          
    return data;                            
  },
    },
     {
        path: '/plants',
        element: <Books></Books>,
        //  loader: () => fetch('/skill.JSON'),
        //  hydrateFallbackElement: <Loading></Loading>,
    },
     
    {
        path: '/profile',
        element: <PrivateRoute>
            <Profile></Profile>
        </PrivateRoute>
    },
     {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    
        ]
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/contact',
        element: <Contact></Contact>
    },
    
  
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])
export default router;