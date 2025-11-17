import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantDetails from "./src/components/RestraurantDetails";
import UserClass from "./src/components/UserClass";
import UserContext from "./src/utils/userContext";

const AppLayout = () => {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        const data = {
            name: "Mohit tuli"
        };
        setUserName(data.name);
    }, [])
    return (
        // Providing context value to the entire app for user login name
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="app">
                <Header />
                <Outlet />
                <UserClass name="Mohit" location="New delhi" />
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/resturant/:resId",
                element: <RestaurantDetails />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);