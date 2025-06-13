import { createBrowserRouter, RouterProvider, NavLink, Outlet } from "react-router-dom"
import UseStateExamples from "./hooks/usestate-eg/index"

// Layout component
const Layout = () => {
  return (
    <>
      <nav style={{ padding: '10px', display: 'flex', gap: '15px' }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/usestate-eg">UseState Examples</NavLink>
      </nav>
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // This will render the component at the root path
        element: <h1>Home page</h1>
      },
      {
        path: "usestate-eg",
        element: <UseStateExamples />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
