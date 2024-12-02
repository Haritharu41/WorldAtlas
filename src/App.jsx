import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Country from "./Pages/Country";
import Contact from "./Pages/Contact";
import { AppLayout } from "./Components/Layout/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";



const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Country",
        element: <Country />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact  />,
      },
      {
        path: "/",
        element: <Home />,
      },

    ]
  }
  
]);

function App() {
  return <>
  
  <RouterProvider router={router}>
    <h1>Hello From Router RouterProvider</h1>
  </RouterProvider>
  </>
}

export default App;
