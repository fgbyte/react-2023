import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode <- no funciona en producción
  //ejecuta el componente 2 veces al iniciar el render del sitio, esto hace que el cleanUp se ejecute también
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
