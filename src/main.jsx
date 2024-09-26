import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/Router';
import AuthProvider from './Providers/AuthProvider';



createRoot(document.getElementById('root')).render(
 <div className='flex flex-col min-h-screen max-w-6xl mx-auto'>
   <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
 </div>
)
