import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'
import Footer from '../components/Footer'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {user, logIn} = userAuth()

    //after signup
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await logIn(email, password)
            navigate('/dashboard')
        }catch (error){
            console.log(error)
            const msg = 'Input a correct password/email'
            setError(msg)
            
            // setTimeout(() => {
            //     document.getElementById('alert').style.display = none;
            // }, 2000);
        }
    }

  return (
    <>
      <div className='w-full h-screen bg-slate-200'>

      <div className='w-full px-4 py-16 z-50'>
        
            <div className='max-w-[320px] mx-auto py-8'>
                <h1 className='text-3xl font-bold text-center'>Sign In</h1>
                <p className='py-8 text-sm text-gray-600 text-center'>New to WalkIn? <span className='text-green'><Link to='/signup'>Sign Up</Link></span> </p>
                {error? <p id='alert' className='p-3 bg-[#89E101] bg-opacity-30 rounded my-2 text-center text-gray-600'>{error}</p> : null}
                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                    <input onChange={(e) => {setEmail(e.target.value)}} className='p-3 my-2 rounded outline-0' type="email" placeholder='Email' autoComplete='email'/>
                    <input onChange={(e) => {setPassword(e.target.value)}} className='p-3 my-2 rounded outline-0' type="password" placeholder='Password' autoComplete='current-password' />
                    <button className='bg-[#89E101] py-3 my-6 rounded font-bold'>Sign In</button>
                    <div className='flex justify-between items-center text-sm text-gray-600'>
                        <p><input className='mr-2' type="checkbox" />Remember me</p>
                        <p>Need help?</p>
                    </div>
                </form>
            </div>
        
      </div>
    </div>
    </>
  )
}

export default Login
