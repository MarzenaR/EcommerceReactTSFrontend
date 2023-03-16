import { createBrowserRouter } from "react-router-dom";
import { loggedRoutes, unloggedRoutes } from "./routes";
import ContactUs from "../views/ContactUs";
import Shop from "../views/Shop";
import Home from "../views/Home";
import UnloggedLayout from "../layouts/UnloggedLayout";
import Login from "../views/Login";
import Register from "../views/Register";



const createRouter = () => {
        return createBrowserRouter([
            {
                path: "/",
                element: <UnloggedLayout />,
                children: [
                    {
                        path: unloggedRoutes.home,
                        element: <Home />
                    },
                    {
                        path: unloggedRoutes.shop,
                        element: <Shop />
                    },
                    {
                        path: unloggedRoutes.contactUsUnlogged,
                        element: <ContactUs />
                    },
                    {
                        path: unloggedRoutes.login,
                        element: <Login />
                    },
                    {
                        path: unloggedRoutes.register,
                        element: <Register />
                    },
                ]
            }
        ])
}

export default createRouter;

