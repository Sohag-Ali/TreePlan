// import React, { use } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
// import { Navigate } from 'react-router';
// import Loading from '../Components/Loading';

// const PrivateRoutes = ({children}) => {
//     const {user,loading} = use(AuthContext);
//     if(loading){
//        return <Loading></Loading>
//     }
//     if(user){
//         return children;
//     }
//     return <Navigate to ='/login'></Navigate>
// };

// export default PrivateRoutes;