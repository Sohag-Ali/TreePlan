import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Page/Home";
import Details from "../Page/Details";
import Providers from "../Page/Providers";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
         children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/skill.JSON'),
                children: [
                    {
                        path: '/',
                        element: <Providers></Providers>,
                        loader: () => fetch('/providers.JSON'),
                    }
                ]
            },
        ]
    },
    {
        path: '/skillDetails/:id',
        element: <Details></Details>,
        loader: () => fetch('/skill.JSON'),
    },
  
    {
        path: '*',
        element: <h2>Error 404</h2>
    }
])
export default router;