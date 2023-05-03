import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'
import { FaUserAlt, FaSignInAlt } from 'react-icons/fa';


const Navbar = () => {
    const {user, logOut} = userAuth()
  //console.log(user.email)
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    try{
     await logOut()
      navigate('/login')
    }catch(error){
        console.log(error)
    }
  }

  return (
    <div className='flex justify-between items-center py-6 px-4 sm:p-8 w-full z-[100] absolute nav-style'>
        <Link to='/'>
            <h1 className='text-[#000000] text-2xl sm:text-4xl font-bold'>WalkIn</h1>
        </Link>
        
        {
           user?.email ? (<div> <Link to='/dashboard'>
            <button className='pr-4 text-gray-700'>Dashboard</button>
        </Link>
          <button onClick={handleLogout} className='bg-[#89E101] py-2 px-6 rounded cursor-pointer text-white'>Log-Out</button>
      </div>) : 
      (<div> <Link to='/login'>
            <button className='pr-4 text-gray-700'>Sign In</button>
        </Link>
        <Link to='/signup'>
          <button className='bg-[#89E101] px-4 py-2 sm:px-6 rounded cursor-pointer text-white'>Sign Up</button>
        </Link> 
      </div>)
        }
    </div>
  )
}

export default Navbar
