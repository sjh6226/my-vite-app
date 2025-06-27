import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DarkOrLight from './chapter_14/DarkOrLight.jsx'
import Blocks from './chapter_15/Block.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <DarkOrLight /> */}
    <Blocks />
  </StrictMode>,
)
