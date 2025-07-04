import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Upload from './Upload.jsx'
import Gallery from './Gallery.jsx'

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from 'react-router-dom'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='upload' element={<Upload />} />
            <Route path='gallery' element={<Gallery />} />
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
