import React, { useState, useEffect, useRef } from 'react';
import { GoLocation } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom'
import ShareLink from './Sharelink';
import { userAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { v4 as uuid } from 'uuid'; 
import Maps from './Maps'


const CountdownTimer = () => {
  const [getDeal, setGetDeal] = useState(false)
  const [saveDeal, setSaveDeal] = useState(false)
  //const [disable, setDisable] = useState(false);
  const { user } = userAuth()

  const titleRef = useRef(null)
  const priceRef = useRef(null)
  const timeRef = useRef(null)
  const locationRef = useRef(null)

  const navigate = useNavigate()
  

  const dealID = doc(db, 'users', `${user?.email}`)
  const unique_id = uuid();

  const saveDeals = async () => {
    
    const title = titleRef.current.textContent;
    const price = priceRef.current.textContent;
    const time = timeRef.current.textContent;
    const location = locationRef.current.textContent;
    console.log(title)
      if(user?.email){
        setGetDeal(!getDeal)
        setSaveDeal(true)
        //setDisable(true)
        await updateDoc(dealID, {
          savedDeals: arrayUnion({
            id: unique_id,
            title: title,
            price: price,
            time: time,
            location: location
          })
        })
         navigate('/dashboard')
      }else{
        alert('please login')
      }
  }

  const [countdown, setCountdown] = useState(60 * 60 * 24 * 7); // 7 days in seconds
  const [isDisabled, setIsDisabled] = useState(false);

  
  useEffect(() => {
    const remainingTime = localStorage.getItem('countdown');

    if (remainingTime) {
      setCountdown(parseInt(remainingTime, 10));
    }

    const interval = setInterval(() => {
      setCountdown(countdown => {
        const newCountdown = countdown - 1;
        localStorage.setItem('countdown', newCountdown.toString());
        return newCountdown;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      setIsDisabled(true);
      localStorage.removeItem('countdown');
    }
  }, [countdown]);

  const getFormattedTime = () => {
    const weeks = Math.floor(countdown / (60 * 60 * 24 * 7));
    const days = Math.floor((countdown % (60 * 60 * 24 * 7)) / (60 * 60 * 24));
    const hours = Math.floor((countdown % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((countdown % (60 * 60)) / 60);
    const seconds = Math.floor(countdown % 60);

    let formattedTime = '';

    if (weeks > 0) {
      formattedTime += `${weeks} week${weeks > 1 ? 's' : ''} `;
    }

    if (days > 0) {
      formattedTime += `${days} day${days > 1 ? 's' : ''} `;
    }

    formattedTime += `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return formattedTime;
  };

  return (
    <div className="bg-[#E8FCEA] py-8 px-4 sm:px-6 lg:px-8 rounded-xl">
      <div className="max-w-7xl mx-auto">
        <div className="font-bold text-3xl mb-2 title">Up to <span ref={titleRef}>40% off for haircut at frank cutz</span><span ref={locationRef} className='inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'> No 30 oniru off water cooportion, VI <GoLocation className='text-[#89E101]' /></span>
              
                <div className="flex items-center">
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
                </div>

            </div>
            <p className="text-gray-700 text-base">
              <span className='line-through text-2xl font-bold'>#1500</span> to <span ref={priceRef} className='text-2xl font-bold price'>#800</span> <span className="inline-block border border-[#89E101] rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">40% off</span>
            </p>
        <div className="flex items-center justify-center h-24">
          <p ref={timeRef} className="text-2xl font-bold text-green-900 time">{getFormattedTime()}</p>
        </div>
        <div className="flex justify-center">
          <button onClick={saveDeals} className="px-28 py-2 bg-[#89E101] text-white rounded-lg disabled:opacity-50 cursor-pointer" disabled={isDisabled}>Get deal</button>
        </div>
      </div>
      <ShareLink />
      <Maps />
    </div>
  );
};

export default CountdownTimer;
