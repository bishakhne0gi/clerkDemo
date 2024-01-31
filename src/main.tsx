import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing, Dashboard, Collab } from "./containers";
import Layout from "./Layout.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Landing />} />
//       <Route path='dashboard' element={<Dashboard />} />
//       <Route path='collab' element={<Collab />} />
//       <Route path='*' element={<div>Not found</div>} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/collab", element: <Collab /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
