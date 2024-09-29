import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import SingleProductPage from './pages/SingleProductPage.jsx'
import CartPage from './pages/CartPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<h2>Error Page</h2>,
    children:[
      {
        path:'/',
        element:<HomePage />
      },
      {
        path:'/products',
        element:<ProductsPage />
      },
      {
        path:'/singleProducts/:productId',
        element:<SingleProductPage />
      },
      {
        path:'/cart',
        element:<CartPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
