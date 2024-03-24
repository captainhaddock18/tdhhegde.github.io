import React from 'react'
import Navbar from '../components/Navbar'

export default function Notfound() {
  return (
    <div>

    <Navbar/>
    <div className='position-absolute top-50 start-50 translate-middle'><h1 className="text-muted bg-dark ">404 Not Found!</h1></div>
    </div>

  )
}
