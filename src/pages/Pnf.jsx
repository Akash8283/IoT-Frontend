import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img width={"30%"} src="https://assets-v2.lottiefiles.com/a/b80c8f58-1166-11ee-bad3-8fb1e44c9ce0/Pzwmsjc4m2.gif" alt="" />
      <p>Oh No!</p>
      <h2 className='text-5xl'>Looks Like You're Lost</h2>
      <h3 className='mt-2'>The page you are looking is not available</h3>
      <Link to={'/'} className='bg-black rounded p-2 mt-2 text-white px-3'>Back to Home</Link>
    </div>
  )
}

export default Pnf