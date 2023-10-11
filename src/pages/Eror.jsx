import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
function Eror() {
  return (
    <div>
        <Navbar/>
        <main className='h-screen grid place-content-center text-center'>
            <h1 className='text-9xl mb-5'>404</h1>
            <p className='mb-5'>Page not found</p>
            <Link className='btn btn-primary' to='/'>back home</Link>
        </main>
        <Footer/>
    </div>
  )
}

export default Eror