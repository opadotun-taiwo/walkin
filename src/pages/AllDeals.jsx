import React from 'react'
import { GoLocation } from 'react-icons/go';
import Collections from '../components/Collections';
import { Link, useNavigate } from 'react-router-dom'


const AllDeals = () => {
  return (
    <div className='w-full justify-center items-center pt-[100px]'>
      <div className='flex justify-center items-center w-full h-[200px] p-10 sm:p-20 overflow-hidden bg-[#E8FCEA]'>
        <div className='2xl:text-[80px] lg:text-[70px] sm:text-[50px] text-[40px] 2xl:leading-[90px] lg:leading-[80px] leading-tight font-serif font-bold text-center w-full hero-text mx-auto'>Afford the best life.
          <p className='text-xl sm:text-2xl text-[#89E101]'>Time and location matter!</p>
        </div>
      </div>
      <Collections />
    </div>
  )
}

export default AllDeals

