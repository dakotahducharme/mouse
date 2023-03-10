import React from "react";
import { ReactDOM } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";

const router = ([
    {
        path: '/',
        element: <Root />
    },
])

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);