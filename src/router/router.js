import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../layout/Main/Main';
import Home from '../pages/Home/Home';
import Collages from '../pages/Collages/Collages';
import CollageDetails from '../pages/CollageDetails/CollageDetails';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
      }
    ]
    }
  ]);


export default router;