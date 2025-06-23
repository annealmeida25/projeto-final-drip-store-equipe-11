// src/routes/index.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // O layout principal (com Header e Footer)
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <ProductList /> },
      { path: "/produtos/:productId", element: <ProductDetail /> }, // Rota dinâmica
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}