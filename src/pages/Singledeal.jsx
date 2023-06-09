import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { GiWaxSeal } from 'react-icons/gi';
import Timer from '../components/Timer'
import Footer from '../components/Footer';


const Singledeal = () => {
  

  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [
    {
    url: 'https://img.freepik.com/free-photo/young-african-american-man-visiting-barbershop_1157-47699.jpg?w=740&t=st=1681921496~exp=1681922096~hmac=ecbf1e864656b15375b0e51ae203794af73ccb0b8eef74284dc256441677c182'
    },
    {
    url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
    url: 'https://images.unsplash.com/photo-1519500528352-2d1460418d41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
]

const prevSlides = () => {
  const isFirstSLide = currentIndex === 0
  const newIndex = isFirstSLide ? slides.length - 1 : currentIndex - 1
  setCurrentIndex(newIndex)
}

const nextSlides = () => {
  const isLastSLide = currentIndex === slides.length - 1
  const newIndex = isLastSLide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex)
}

  return (
    <div className='flex flex-col items-center pt-[120px] px-4 py-8 sm:flex-row sm:items-start sm:justify-center'>
  <div className='w-full sm:w-3/5 h-screen sm:ml-10'>
    <div className='w-full h-1/2 sm:h-4/5 relative p-4 group'>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full text-white p-2 text-2xl bg-black/20 cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlides} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 text-white text-2xl bg-black/20 cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlides} size={30} />
      </div>
    </div>
    
    <p className='font-bold text-xl sm:text-3xl my-4'>About This Deal</p>
    <div className='flex items-center rounded-xl justify-center w-full h-1/3 sm:h-1/5 bg-[#E8FCEA] py-4 px-2 sm:px-6'>
      <div className='py-8 text-left my-8'>
        Get a fabulous 40% off your next haircut at FrankCutz, located in the heart of Oniru, VI! Simply visit
        our salon at VI to redeem this amazing deal. Our skilled stylists are ready to give you a fresh, new look that will leave you feeling confident and stylish. 
        Don't miss out on this limited time offer - book your appointment today and take advantage of this incredible discount. Experience the difference of a professional haircut at FrankCutz - 
        conveniently located in Oniru, VI!
      </div>
    </div>
  </div>
  <div className='w-full sm:w-2/5 h-screen mr-10 p-4'>
    <Timer />
  </div>
</div>
  )
}

export default Singledeal
