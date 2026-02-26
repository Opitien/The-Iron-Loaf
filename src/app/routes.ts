import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Process from "./pages/Process";
import Products from "./pages/Products";
import Workers from "./pages/Workers";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "process",
        Component: Process,
      },
      {
        path: "bread",
        Component: Products,
      },
      {
        path: "workers",
        Component: Workers,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "*",
        Component: Home, // Fallback
      }
    ],
  },
]);
