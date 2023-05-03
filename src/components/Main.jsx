import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import neardeals from '../assets/dealnearyou.png'
import shopping from '../assets/Shopping.png'
import Group from '../assets/Group.png'
import { TypeAnimation } from 'react-type-animation';
import { userAuth } from '../context/AuthContext'
import { AiOutlineArrowDown } from 'react-icons/ai';

const Main = () => {
  const {user, logOut} = userAuth()
  return (
    <div>
    <div className='flex flex-col items-center justify-center text-dark-blue bg-slate-100 md:h-screen h-[95vh] w-full text-center overflow-x-auto p-16'>
        <h1 className='font-serif 2xl:text-[80px] xl:text-[75px] sm:text-[48px] text-[30px] xl:leading-[72px] md:leading-[56px] leading-[36px] xl:max-w-[550px] sm:max-w-[350px] max-w-[250px]'>
          Afford your desired lifestyle
          <br /><span class="text-purple-800 text-[1.7rem] leading-10 sm:text-[60px]">
              <TypeAnimation
                sequence={[
                    'With someone.', // Types 'One'
                    1000, // Waits 1s
                    'Nearby', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'Stress free',
                    2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                />
          </span>
        </h1>
        <p className='sm:text-[18px] lg:text-[20px] text-center mb-[29px] lg:mb-[48px] md:mt-9 mt-[25px] md:max-w-[485px] max-w-[281px] mx-auto'>
            Discover amazing places near you and
            enhance your lifestyle with deals close to you.
        </p>
        {
          user?.email ? (<Link to='/'>
        <AiOutlineArrowDown size={40} className='font-semibold'/>
        </Link>):

        (<Link to='/signup'>
        <button className='bg-[#89E101] py-4 px-12 rounded cursor-pointer text-black font-semibold'>Join the waitList</button>
        </Link>)
          
        }
        
    </div>

    <section className='py-[129px] bg-gradient-to-b from-[#FFFFFF] to-[#F3F4F6]'>
        <div className='flex gap-8 sm:items-center 2xl:max-w-[1200px] max-w-[80vw] mx-auto  md:flex-row flex-col'>
          <div className='md:w-1/2'>
            <p className='uppercase tracking-[2px] text-[12px] md:text-base font-semibold mb-2 sm:pl-2'>Enhanced shopping</p>
            <h2 className='font-serif 2xl:text-[80px] xl:text-[75px] sm:text-[48px] text-[36px] xl:leading-[72px] md:leading-[56px] leading-[36px] xl:max-w-[550px] sm:max-w-[350px] max-w-[250px]'>Shop better<br /> <span className='text-purple-800'>with people.</span></h2>
             <p className='py-8 sm:block hidden'>Experience shopping like never before! Connect with a complete stranger in your neighborhood and explore local shops and hidden gems together. Discover new favorites and make meaningful connections in your community. It's shopping, redefined. Sign up today and start your adventure.</p>
          </div>
          <div className='md:w-1/2'>
              <img src={Group} alt="deals near you" />
              <p className='py-8 block sm:hidden'> Experience shopping like never before! Connect with a complete stranger in your neighborhood and explore local shops and hidden gems together. Discover new favorites and make meaningful connections in your community. It's shopping, redefined. Sign up today and start your adventure.</p>
          </div>
        </div>
    </section>

    <section className='py-[129px] bg-gradient-to-b from-[#FFFFFF] to-[#F3F4F6]'>
     <div className='flex gap-8 sm:items-center 2xl:max-w-[1200px] max-w-[80vw] mx-auto  md:flex-row md:flex-row-reverse flex-col'>          <div className='md:w-1/2'>
            <p className='uppercase tracking-[2px] text-[12px] md:text-base font-semibold mb-2 sm:pl-2'>Afford more</p>
            <h2 className='font-serif 2xl:text-[80px] xl:text-[75px] sm:text-[48px] text-[36px] xl:leading-[72px] md:leading-[56px] leading-[36px] xl:max-w-[550px] sm:max-w-[350px] max-w-[250px]'>Get more <br /> <span className='text-purple-800'>near you.</span></h2>
             <p className='py-8 sm:block hidden'>Discover amazing places and enhance your lifestyle with deals right in your neighborhood! Get closer to the things that matter most to you with our curated selection of local experiences. From cozy cafes to trendy boutiques, we've got you covered. Start exploring today and get more out of life, right where you are.</p>
          </div>
          <div className='md:w-1/2'>
              <img src={neardeals} alt="deals near you" />
              <p className='py-8 block sm:hidden'>Discover amazing places and enhance your lifestyle with deals right in your neighborhood! Get closer to the things that matter most to you with our curated selection of local experiences. From cozy cafes to trendy boutiques, we've got you covered. Start exploring today and get more out of life, right where you are.</p>
          </div>
        </div>
    </section>
    
    <section className='py-[129px] bg-gradient-to-b from-[#FFFFFF] to-[#F3F4F6]'>
          <div className='flex gap-8 sm:items-center 2xl:max-w-[1200px] max-w-[80vw] mx-auto  md:flex-row flex-col'>          
          <div className='md:w-1/2'>
            <p className='uppercase tracking-[2px] text-[12px] md:text-base font-semibold mb-2 sm:pl-2'>Group buy</p>
            <h2 className='font-serif 2xl:text-[80px] xl:text-[75px] sm:text-[48px] text-[36px] xl:leading-[72px] md:leading-[56px] leading-[36px] xl:max-w-[550px] sm:max-w-[350px] max-w-[250px]'>Afford things <br /> <span className='text-purple-800'>in groups.</span></h2>
             <p className='py-8 sm:block hidden'>Join forces with your neighbors and support local businesses together! By buying in a group, you not only get great deals, but you also increase social interaction in your community. It's a win-win for everyone involved. Shop smarter, connect with your neighbors, and make a positive impact on your local economy. Start group buying today and see the difference it can make!</p>
          </div>
          <div className='md:w-1/2'>
              <img src={shopping} alt="deals near you" />
              <p className='py-8 block sm:hidden'>Join forces with your neighbors and support local businesses together! By buying in a group, you not only get great deals, but you also increase social interaction in your community. It's a win-win for everyone involved. Shop smarter, connect with your neighbors, and make a positive impact on your local economy. Start group buying today and see the difference it can make!</p>
          </div>
        </div>
    </section>

    
    
    </div>
  )
}

export default Main
