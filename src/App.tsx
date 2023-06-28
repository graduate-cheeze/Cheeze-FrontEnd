import * as P from '@pages'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      children: [
        { path: '/login', element: <P.LoginPage /> },
        { path: '/register', element: <P.RegisterPage /> },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
