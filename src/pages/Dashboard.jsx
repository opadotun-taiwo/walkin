import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
import {FiSettings} from 'react-icons/fi'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import Dealvoucher from '../components/Dealvoucher'
import Footer from '../components/Footer';
import AutoLocation from '../components/AutoLocation'
import GroupBuy from '../components/Groupbuy'
import Direction from '../components/Direction'


const Dashboard = () => {
  return (
    <div className='flex w-full h-screen justify-between'>
      <div className='w-[15%] bg-slate-100 pt-[100px] fixed h-screen border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
            <Link to='/'>
                <div className=' bg-purple-400 hover:bg-purple-600 inline-block rounded-lg p-3 my-4 cursor-pointer'>
                    <RxDashboard size={20}/>
                </div>
            </Link>
            <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
            <Link to='/orders'>
                <div className=' bg-gray-200 hover:bg-gray-300 inline-block rounded-lg p-3 my-4 cursor-pointer'>
                    <HiOutlineShoppingBag size={20}/>
                </div>
            </Link>
        </div>
      </div>
      <div className='relative w-full h-screen pt-[100px] sm:ml-[250px]'>
          <Dealvoucher />
      </div>
    </div>
  )
}

export default Dashboard
