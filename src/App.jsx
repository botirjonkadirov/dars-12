import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Create from './pages/Create'
import Recipie from './pages/Recipie'
import Readmore from './pages/Readmore'
import Eror from './pages/Eror'
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <Eror/>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: 'create',
          element: <Create/>,

        },
        {
          path: 'recipie',
          element: <Recipie/>,
        },
        {
          path: 'recipes/:id',
          element: <Readmore/>,
        }
      ]
    }
  ])
  return <RouterProvider router={routes}/>
}

export default App