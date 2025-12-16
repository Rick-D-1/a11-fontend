import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import router from './routes/Routes.jsx';
import AuthProvieder from './Provider/AuthProvieder.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvieder>
      <RouterProvider router={router} />
    </AuthProvieder>
  </StrictMode>,
)
