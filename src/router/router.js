import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../layout/Main/Main';
import Home from '../pages/Home/Home';
import Collages from '../pages/Collages/Collages';
import CollageDetails from '../pages/CollageDetails/CollageDetails';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Profile from '../pages/Profile/Profile';
import PrivetRouter from './PrivetRouter';
import Admission from '../pages/Admission/Admission';
import MyCollage from '../pages/MyCollage/MyCollage';
import Error from '../pages/Error/Error';



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[{
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/collages',
        element:<Collages></Collages>,
        loader:async()=>fetch(`http://localhost:4000/collages`)

      },
      {
        path:"details/:id",
        element:<CollageDetails></CollageDetails>,
        
        loader:async({params})=>fetch(`http://localhost:4000/collages/${params.id}`)
        
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/profile',
        element:<PrivetRouter><Profile></Profile></PrivetRouter>
      },
      {
        path:'/admission',
        element:<PrivetRouter><Admission></Admission></PrivetRouter>,
        loader:async()=>fetch(`http://localhost:4000/collages`)

      },
      {
        path:'mycollage/:email',
        element:<PrivetRouter><MyCollage></MyCollage></PrivetRouter>,
        loader:async({params})=>fetch(`http://localhost:4000/admission/${params?.email}`)
      }
    ]
    }
  ]);


export default router;