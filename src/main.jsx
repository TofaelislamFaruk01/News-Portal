import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>

  </React.StrictMode>,

)
