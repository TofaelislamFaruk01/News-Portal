
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/router.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>

    <Router/>

    
    
    </BrowserRouter>,
 
)
