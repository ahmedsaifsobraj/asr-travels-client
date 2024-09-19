import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllTouristSpot from "../pages/AllTouristSpot/AllTouristSpot";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import MyList from "../pages/MyList/MyList";
import ErrorPage from "../ErrorPage/ErrorPage";
import RequireAuth from "../Authentication/RequireAuth/RequireAuth";
import Countries from "../pages/Home/Countries";
import CountryDetails from "../pages/CountryDetails/CountryDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'alltouristspot',
            element:<AllTouristSpot></AllTouristSpot>
        },
        {
            path:'addtouristspot',
            element:<RequireAuth><AddTouristSpot></AddTouristSpot></RequireAuth>
        },
        {
            path:'mylist',
            element:<RequireAuth><MyList></MyList></RequireAuth>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:'countries',
            element:<Countries></Countries>
        },
        {
            path:"countries/:id",
            element:<CountryDetails></CountryDetails>
        }
      ]
    },
  ]);
export default router;