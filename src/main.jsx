import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />
  }
]);

// Smooth scrolling is for in-page nav clicks, not for page load. While it is
// active the browser animates its jump to a #hash, so a shared permalink
// scrolls through the entire page for a second or more before arriving. Any
// nav click is preceded by a pointerdown or keydown, so turning it on at the
// first user input keeps deep links instant without losing the effect.
const enableSmoothScroll = () => document.documentElement.classList.add('smooth-scroll')
window.addEventListener('pointerdown', enableSmoothScroll, { once: true })
window.addEventListener('keydown', enableSmoothScroll, { once: true })


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
