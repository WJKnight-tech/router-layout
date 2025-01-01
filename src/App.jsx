import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import MainLayout from "./layouts/MainLayout"
import { Home } from "./pages"


const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
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



