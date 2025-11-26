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


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
         children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/skill.JSON'),
                 hydrateFallbackElement: <Loading></Loading>,
                children: [
                    {
                        path: '/',
                        element: <Providers></Providers>,
                        loader: () => fetch('/providers.JSON'),
                        hydrateFallbackElement: <Loading></Loading>,
                    }
                ]
            },
            {
        path: '/skillDetails/:id',
        element: <PrivateRoute>
            <Details></Details>
        </PrivateRoute>,
        loader: async () => {
    const res = await fetch('/skill.JSON');  
    const data = await res.json();          
    return data;                            
  },
    },
     {
        path: '/book',
        element: <Books></Books>,
        //  loader: () => fetch('/skill.JSON'),
        //  hydrateFallbackElement: <Loading></Loading>,
    },
     
    {
        path: '/profile',
        element: <Profile></Profile>
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
        path: '*',
        element: <h2>Error 404</h2>
    }
])
export default router;