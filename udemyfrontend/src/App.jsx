// import { useState,useReducer, createContext } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './components/Header/Header'
// import { RouterProvider,createBrowserRouter } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import ViewCourse from './components/Viewcourse/ViewCourse.jsx'
// import SignUp from './components/SignUp/SignUp.jsx'
// import Login from './components/Login/Login.jsx'
// import { reducer, initialState } from './reducer/useReducer.js'


// export const userContext = createContext
// function App() {
//   const [state, dispatch] = useReducer(reducer,initialState)
  
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

//   return (
//     <>
//       <userContext.Provider value={{state, dispatch}}>
//       <RouterProvider router={router} />
//       </userContext.Provider>
//     </>
//   )
// }

// export default App


import { useState, useReducer, createContext } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import ViewCourse from './components/Viewcourse/ViewCourse.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Login from './components/Login/Login.jsx';
import { reducer, initialState } from './reducer/useReducer.js';
import Logout from './components/Logout/Logout.jsx';
import PurchasedCourse from './components/PurchasedCourse/PurchasedCourse.jsx';

export const userContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'courses',
          element: <ViewCourse />,
        },
        {
          path: 'signup',
          element: <SignUp />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path:"logout",
          element:<Logout />
        },
        {
          path:"purchasedcourse",
          element:<PurchasedCourse />
        }
      ],
    },
  ]);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      <RouterProvider router={router} />
    </userContext.Provider>
  );
}

export default App;
