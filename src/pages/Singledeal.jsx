import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { GiWaxSeal } from 'react-icons/gi';
import Timer from '../components/Timer'


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
    <div className='flex w-full items-center pt-[120px]'>
      <div className='w-[70%] h-[600px] relative sm:ml-10'>
          <div className='w-full h-[200px] sm:h-[500px] relative p-4 group'>
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full text-white p-2 text-2xl bg-black/20 cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlides} size={30} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 text-white text-2xl bg-black/20 cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlides} size={30} />
            </div>
          </div>
          
          <p className='font-bold text-xl sm:text-3xl m-4'>About This Deal</p>
          <div className='flex items-center rounded justify-center w-full h-[70px] bg-purple-200 py-12 px-6'>
            <div className='w-[20%] text-green-300'><GiWaxSeal size={40} /></div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repellendus similique ut dolor optio facere! Consequuntur facilis temporibus voluptate porro, officia voluptates distinctio. Autem alias hic voluptas modi, excepturi nesciunt.</div>
          </div>
          <div>
            
          </div>
      </div>
      <div className='w-[30%] h-[600px] mr-10 p-4'>
        <Timer />
      </div>
    </div>
  )
}

export default Singledeal
