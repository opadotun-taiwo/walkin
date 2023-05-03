import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white p-8'>
      <div className='relative p-4 flex flex-col justify-center items-center w-full h-[200px]'>
        <h1 className='text-center font-serif 2xl:text-[80px] xl:text-[40px] sm:text-[48px] text-[30px] xl:leading-[72px] md:leading-[56px] leading-[36px] xl:max-w-[550px] sm:max-w-[350px] max-w-[250px]'>Let's make a deal.</h1>
        <p className='py-2 text-center'>We can bring more people nearby to your business. <br />You get real insight into how your deals are performing all in one place.</p>
        <button className='bg-[#89E101] my-2 py-2 px-8 rounded cursor-pointer text-black font-semibold'>Bring a deal</button>

      </div>
      <div className='md:flex md:justify-between p-4'>
        <div className='mt-4'>
          <h2 className='py-4 font-semibold'>Product</h2>
          <p className='py-2'>Buisness owners</p>
          <p className='py-2'>Afford the life</p>
        </div>
        <div className='mt-4'>
          <h2 className='py-4 font-semibold'>Company</h2>
          <p className='py-2'>Join us</p>
          <p className='py-2'>Investment</p>
        </div>
        <div className='mt-4'>
          <h2 className='py-4 font-semibold'>Connect with us</h2>
          <p className='py-2'>Facebook</p>
          <p className='py-2'>Instgram</p>
          <p className='py-2'>Twitter</p>
        </div>
        <div className='mt-4'>
          <h2 className='py-4 font-semibold'>Resources</h2>
          <p className='py-2'>Share insight</p>
          <p className='py-2'><Link to='https://medium.com/@walkins'>Blog</Link></p>
        </div>
      </div>
      <div className='pt-16 pb-16 flex justify-center items-center w-full h-[40px] text-center'>Copyright © 2023 All rights reserved.</div>
    </div>
  )
}

export default Footer
