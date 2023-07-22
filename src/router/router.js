import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../layout/Main/Main';
import Home from '../pages/Home/Home';
import Collages from '../pages/Collages/Collages';



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
        loader:async()=>fetch('collage.json')

      }
    ]
    },
  ]);


export default router;