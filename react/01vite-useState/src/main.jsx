import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 

// import App from './assets/projects/useEffect/App'
// import App from "./assets/projects/counter/App"
import App from './assets/projects/props/App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
