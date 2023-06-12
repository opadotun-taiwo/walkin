import React, { useState, useEffect } from 'react';
import { userAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { doc, updateDoc, onSnapshot } from "firebase/firestore";


const Dealvoucher = () => {
    const [deals, setdeals] = useState([])
    const { user } = userAuth()

    console.log(user)

    // const user = {
    //     email: 'tosin@gmail.com',
    //     title: 'Francutz',
    //     price: 100,
    //     time: '2:30'
    // }

        //console.log(typeof(deals))

    useEffect(() => {
        console.log(doc.data)
        const docRef = doc(db, 'users', `${user?.email}`);
        const unsubscribe = onSnapshot(docRef, (doc)=> {
            console.log(doc.data()?.metadata)
            setdeals(doc.data()?.savedDeals);
        });
        return unsubscribe;

    },[user?.email])



  return (
    <div className='sm:grid grid-cols-1 md:grid-cols-2'>
            
      {deals?.map((item, id) => (
            
      <div key={id} class="w-25 m-4 sm:w-96 h-56 bg-purple-500 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            
            
                <div class="w-full px-8 absolute">
                    <div class="flex justify-between">
                        <div class="">
                            <p class="font-bold mb-2">
                                    {item?.title}
                            </p>  
                            <p class="font-light tracking-widest mb-2">
                                    {item?.location}
                            </p>
                        </div>
                        <img class="w-14 h-14" src=""/>
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
                                <p class="font-light text-xs">
                                    Expiry
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                    {item?.time}
                                </p>
                            </div>
    
                            <div className=''>
                                <button className='bg-[#89E101] px-8 sm:px-6 rounded cursor-pointer text-white'>
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
