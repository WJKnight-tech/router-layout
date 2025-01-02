import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import MainLayout from "./layouts/MainLayout"
import { Home } from "./pages"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"


const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])

const App = () => {
  return (

    <RouterProvider router={router} />
  )
}



export default App



