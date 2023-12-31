import { Navigate, createBrowserRouter, } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/Home/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Home/Login/Login/Login";
import Register from "../pages/Home/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'terms',
        element: <Terms></Terms>
      }
    ]

  },
  {
    path: "category",
    element: <Main></Main>,
    children: [

      {
        path: ':id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`https://the-news-dragon-server-afrozarahmanp.vercel.app/categories/${params.id}`)
      }

    ]
  },
  {
    path: 'news',
    element: <NewsLayout></NewsLayout>,
    children: [

      {
        path: ':id',
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-news-dragon-server-afrozarahmanp.vercel.app/news/${params.id}`)
      }
    ]
  }
]);

export default router;