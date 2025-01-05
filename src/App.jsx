import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import MainLayout from "./layouts/MainLayout"
import { Home, About, Contact } from "./pages"



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



