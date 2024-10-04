import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import ViewCourse from './components/Viewcourse/ViewCourse.jsx'
import SignUp from './components/SignUp/SignUp.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children:[
       {
        path:'',
        element:< Home />
       },
       {
        path:'courses',
        element:<ViewCourse />
       },
       {
        path:'signup',
        element:<SignUp />
       }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
