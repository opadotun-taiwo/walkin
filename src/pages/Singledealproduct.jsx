import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { GiWaxSeal } from 'react-icons/gi';
import Timer from '../components/Timer'
import Footer from '../components/Footer';


const Singledealproduct = () => {
  

  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [
    {
    url: 'https://img.freepik.com/free-photo/black-t-shirts-with-copy-space_53876-102012.jpg?w=740&t=st=1683839979~exp=1683840579~hmac=c09c2dedb0302c4204f759d65b61f9af1e74f1561bcbc59d3d502c2474afc79e'
    },
    {
    url: 'https://img.freepik.com/free-photo/white-t-shirts-with-copy-space-gray-background_53876-104920.jpg?w=740&t=st=1683840587~exp=1683841187~hmac=0dd1c937fefd367b6944b344c7144fa5ac63ea54b0dd6efe7f715426625f9064'
    },
    {
    url: 'https://img.freepik.com/free-photo/isolated-opened-white-t-shirt_125540-1452.jpg?w=740&t=st=1683840655~exp=1683841255~hmac=606c6fa3ce1a954e36e38a550945a877b3a7326c5258d70dfabc43723781d75b'
    },
    {
    url: 'https://img.freepik.com/free-vector/white-t-shirt-baseball-cap-man-realistic_1284-9448.jpg?w=740&t=st=1683840671~exp=1683841271~hmac=7432fb928ecfd88088407c748a752c0812bf4c7ea8a0390a6e9989498745aace'
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
    <div className='flex items-center rounded-xl justify-center w-full h-1/3 sm:h-1/5 bg-gray-100 py-4 px-2 sm:px-6'>
      <div className='p-4 text-center'>
        Get a fabulous 40% off your next haircut at FrankCutz, located in the heart of Oniru, VI! Simply visit
         our salon at VI to redeem this amazing deal. Our skilled stylists are 
         ready to give you a fresh, new look that will leave you feeling confident and stylish. 
         Don't miss out on this limited time offer - book your appointment today and take advantage of 
         this incredible discount. Experience the difference of a professional haircut at FrankCutz - 
         conveniently located in Oniru, VI!
      </div>
    </div>
  </div>
  <div className='w-full sm:w-2/5 h-screen mr-10 p-4'>
    <Timer />
  </div>
  <Footer />
</div>
  )
}

export default Singledealproduct
