import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import AddEvent from "../Pages/AddEvent";
import Events from "../Pages/Events";
import MyEvent from "../Pages/MyEvent";
import UpdateEvent from "../Pages/UpdateEvent";
import PrivateRoutes from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addevent",
        element:(<PrivateRoutes>

          <AddEvent></AddEvent>,
        </PrivateRoutes>)
        
      },
      {
        path: "/events",
        element: (
          <PrivateRoutes>
            <Events></Events>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myevents",
        element: (
          <PrivateRoutes>
            <MyEvent></MyEvent>
          </PrivateRoutes>
        ),
      },
      // In your router config
      {
        path: "/updateEvent/:id",
        element: (
          <PrivateRoutes>
            <UpdateEvent />,
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          const res = await fetch(
            `https://event-flow-server-three.vercel.app/events/${params.id}`
          );
          if (!res.ok) throw new Error("Event not found");
          return res.json();
        },
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "Signup",
    element: <Signup></Signup>,
  },
]);

export default router;
