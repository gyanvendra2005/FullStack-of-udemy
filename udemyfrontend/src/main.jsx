import { createContext, StrictMode, useReducer } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import ViewCourse from './components/Viewcourse/ViewCourse.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import Login from './components/Login/Login.jsx'
import { reducer, initialState } from './reducer/useReducer.js'


// export const userContext = createContext()



// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children:[
//        {
//         path:'',
//         element:< Home />
//        },
//        {
//         path:'courses',
//         element:<ViewCourse />
//        },
//        {
//         path:'signup',
//         element:<SignUp />
//        },
//        {
//         path:"login",
//         element:<Login />
//        }
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <userContext.Provider value={{state, dispatch}}>
    <RouterProvider router={router} />
    </userContext.Provider> */}
    <App/>
  </StrictMode>,
)
