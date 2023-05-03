import React, { useState, useEffect } from 'react';
import { userAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { doc, updateDoc, onSnapshot } from "firebase/firestore";

const Dealvoucher = () => {
    const [deals, setdeals] = useState([])
    const { user } = userAuth()

        console.log(typeof(deals))

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`, (doc)=> {
            setdeals(doc.data()?.savedDeals);
        }))
    },[user?.email])

  return (
    <div>
        {deals?.map((item, id) => (
            
      <div key={id} class="w-25 sm:w-96 h-56 ml-[20%] mr-[5%] bg-purple-500 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            
            
                <div class="w-full px-8 absolute top-8">
                    <div class="flex justify-between">
                        <div class="">
                            <p class="font-light">
                                    {item?.title}
                            </p>  
                            <p class="font-medium tracking-widest">
                                Karthik P
                            </p>
                        </div>
                        <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png"/>
                    </div>
                    <div class="pt-1">
                        <p class="font-light">
                            Card Number
                        </p>
                        <p class="font-medium tracking-more-wider">
                            {item?.price}
                        </p>
                    </div>
                    <div class="pt-6 pr-6">
                        <div class="flex justify-between">
                            <div class="">
                                <p class="font-light text-xs">
                                    Valid
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                    {item?.time}
                                </p>
                            </div>
                            <div class="">
                                <p class="font-light text-xs text-xs">
                                    Expiry
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                    {item?.time}
                                </p>
                            </div>
    
                            <div class="">
                                <button className='bg-[#89E101] px-4 py-2 sm:px-6 rounded cursor-pointer text-white'>
                                    Use now
                                </button>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        ))}
    </div>
  )
}

export default Dealvoucher
