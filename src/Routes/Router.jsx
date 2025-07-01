import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import AddEvent from "../Pages/AddEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/addevent',
            element:<AddEvent></AddEvent>,
        }
    ]
  },
  {
    path:'login',
    element:<Login></Login>
  },
  {
    path:'Signup',
    element:<Signup></Signup>
  }
]);

export default router;