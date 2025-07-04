import React from 'react'
import './App.css'
import {Link, Outlet} from 'react-router-dom'
import Upload from './Upload.jsx'
import Gallery from './Gallery.jsx'

export default function App() {

  return (
    <>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <h2>Cloudinary Demo</h2>
        <span style={{display:'flex',gap:'50px'}}>
          <h3><Link to='/gallery'>Gallery</Link></h3>
          <h3><Link to='/upload'>Upload</Link></h3>
        </span>
      </div>
        <Outlet />

    </>
  )
}
