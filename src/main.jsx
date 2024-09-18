import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateNotification from './pages/CreateNotification.jsx';

const router = createBrowserRouter([{
  path:'/',
  children:[
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/create-notification',
      element:<CreateNotification/>
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
