import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';

const Profile = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [interest, setInterest] = useState('')
  const [shop, setShop] = useState('')
  const [notification, setNotification] = useState('')
  const [claim, setClaim] = useState(false)

  //console.log(claim)
  const navigate = useNavigate()

  const learnForm = async (e) =>{
    e.preventDefault(e)
    await addDoc(collection(db, 'userLearn'),{
      Name: name,
      Email: email,
      Location: location,
      Interest: interest,
      Shop: shop,
      Notification: notification,
      Claims: claim
    })
    setName('')
    setEmail('')
    setLocation('')
    setInterest('')
    setShop('')
    setNotification('')
    setClaim(false)

    navigate('/alldeals')
  }

  return (
    <div className='flex flex-col w-full items-center pt-[100px] text-dark-blue bg-slate-100 md:h-screen h-screen text-center'>
      <h1 className='font-serif 2xl:text-[80px] xl:text-[40px] sm:text-[48px] text-[30px] xl:leading-[72px] md:leading-[56px] leading-[36px] xl:max-w-[550px] sm:max-w-[350px] max-w-[250px]'>
          Let's personalize your <span className='text-purple-800'>deals.</span>
      </h1>
      <div className='m-w-[300px] mx-auto py-4 sm:w-[650px]'>
        <form onSubmit={learnForm} className='w-full flex flex-col'>
                    <input value={name} onChange={(e) => {setName(e.target.value)}} className='p-3 my-2 rounded outline-0' type="text" placeholder='Your name' name='name' autoComplete='name'/>
                    <input value={email} onChange={(e) => {setEmail(e.target.value)}} className='p-3 my-2 rounded outline-0' type="email" placeholder='Confirm email' name='email' autoComplete='email'/>
                    <input value={location} onChange={(e) => {setLocation(e.target.value)}} className='p-3 my-2 rounded outline-0' type="text" name='location' placeholder='location' autoComplete='current-location' />
                    <input value={interest} onChange={(e) => {setInterest(e.target.value)}} className='p-3 my-2 rounded outline-0' type="text" name='interest' placeholder='Your interest e.g Shopping, barbing, party ...' autoComplete='interest' />
                    <select value={shop} onChange={(e) => {setShop(e.target.value)}} className='p-3 my-2 rounded outline-0 text-gray-400' name="shopping" id="shopping" form="shopping">
                        <option value='No response'>Shopping experience you prefer</option>
                        <option value='Walkin'>WalkIn</option>
                        <option value='Online'>Online shopping</option>
                    </select>
                    <select value={notification} onChange={(e) => {setNotification(e.target.value)}} className='p-3 my-2 rounded outline-0 text-gray-400' name="cars" id="cars" form="carform">
                        <option value='No response'>We would notify you of deal near you</option>
                        <option value='3/week'>3 times per week</option>
                        <option value='2/week'>2 times per week</option>
                        <option value='1/week'>Ones per day</option>
                        <option value='anytime'>Anytime</option>
                        <option value='none'>None</option>
                    </select>
                    <p className='flex items-start text-gray-400'>Claim deals with other people near you<input value={claim} onChange={() => {setClaim(!claim)}} type="checkbox" checked={claim} className='ml-4'/></p>
                    <button type='submit' className='bg-[#89E101] py-3 my-6 rounded font-bold'>Get a 40% deal now</button>          
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
