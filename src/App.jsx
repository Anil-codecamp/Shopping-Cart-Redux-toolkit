import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import AppLayout from './component/layout/AppLayout';
import Myshop from './Myshop';
import Cartpage from './component/Cartpage';



const App = () => {
  const router = createBrowserRouter([

    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path: "/",
          element: <Myshop/>
        },
        
        {
          path: "/cart",
          element: <Cartpage/>
        },
      
      ]
      
    }
    
  ]);
 
   return <RouterProvider router={router} />
  
}

export default App
