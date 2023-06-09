import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'
import logo from '../assets/logo.png'
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
    <div className='flex justify-between items-center py-6 px-4 sm:p-8 w-full sticky top-0 h-[70px] z-[100] bg-[#fff] drop-shadow-lg absolute nav-style'>
        <Link to='/'>
            <img src={logo} className="" alt="walkin for a deal" />
        </Link>

        
        {
           user?.email ? 
        (<div> 

            <Link to='/alldeals'>
                <button className='pr-4 text-gray-700 sm:text-xl md:px-8 underline hover:decoration-[#7dc107]'> All deals</button>
            </Link>
            <Link to='/dashboard'>
                <button className='pr-4 text-gray-700 md:px-8'> Dashboard</button>
            </Link>
          <button onClick={handleLogout} className='bg-[#89E101] py-2 md:px-6 rounded cursor-pointer text-white'>Log-Out</button>
        </div>) : 
      (<div> <Link to='/login'>
            <button className='pr-4 text-gray-700'>Sign In</button>
        </Link>
        <Link to='/signup'>
          <button className='bg-[#7dc107] px-4 py-2 sm:px-6 rounded cursor-pointer text-white'>Sign Up</button>
        </Link> 
      </div>)
        }
        
    </div>
  )
}

export default Navbar
