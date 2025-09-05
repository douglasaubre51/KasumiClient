import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomeView from './pages/HomeView.jsx'
import Overview from './pages/OverView.jsx'
import ErrorView from './pages/ErrorView.jsx'
import './index.css'

const root = document.getElementById('root')
if (root === null)
  throw new Error("root element not found!")

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* hero landing */}
        <Route path="/" element={<HomeView />} />

        {/* logged in page */}
        <Route path="/login/:token" element={<Overview />} />

        {/* error view */}
        <Route path="/error" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
