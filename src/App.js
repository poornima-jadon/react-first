import React, { Suspense,Provider, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantsMenu from "./components/RestaurantsMenu";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import { lazy } from "react";
import UserContext from "./utils/UserContext";

const About = lazy(()=>import("./components/About"));
const AppLayout =()=>{
    const [userName,setUserName] = useState("poornima");
    return (<UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="bg-gray-100">
        <Header/>
       <Outlet/>
    </div>  </UserContext.Provider>);
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>loading....</h1>}><About /></Suspense>,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantsMenu />,
            }

        ],
        errorElement:<Error/>,
    },


]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);