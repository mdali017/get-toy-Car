import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import AddAToyCar from './components/AddAToyCar/AddAToyCar.jsx';
import AllToyCar from './components/AllToyCar/AllToyCar.jsx';
import ViewDetails from './components/AllToyCar/ViewDetails.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import MyToyCar from './components/MyToyCar/MyToyCar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'add-a-toy-car',
        element: <PrivateRoutes><AddAToyCar></AddAToyCar></PrivateRoutes>
      },
      {
        path: '/all-toy',
        element: <AllToyCar></AllToyCar>
      },
      {
        path: '/toyCar/:id',
        element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://get-toy-cars-server.vercel.app/toyCar/${params.id}`)
      },
      {
        path: '/my-toy-car',
        element: <MyToyCar></MyToyCar>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
