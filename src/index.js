import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Upload from "./routes/Upload";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  }, {
    path: "/uploadImage",
    element: <Upload />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);