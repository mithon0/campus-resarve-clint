import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({children}) => {
const location =useLocation();
const {user,loading}=useContext(AuthContext)

if(loading){
    return <div className='text-center'><span className="loading loading-bars loading-lg mx-auto m-10 "></span></div>
}

if(user){
    return children;
}
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivetRouter;