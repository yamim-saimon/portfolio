import React from 'react'
import {FaMapPin,FaMobile,FaEnvelope} from 'react-icons/fa'

export default function ContactComponent() {
    return (
        <div className='w-full   '>
            <div className="text-5xl font-bold text-gray-800 flex justify-center">Contact</div>
            <div className=' mt-5 sm:w-full sm:flex justify-between   mx-auto'>
                <div className='mt-5 py-5 sm:w-1/2  border-2 '>
                    <p className='flex'><FaMapPin className='text-2xl mx-5 text-red-400'/>Address: North Masdair Gabtoli, Narayangonj, Dhaka, Bnagladesh</p>
                    <p className='flex items-center '><FaMobile className='text-2xl mx-5 text-red-400 my-3'/>phone:01675335959</p>
                    <p className='flex'><FaEnvelope className='text-2xl mx-5 text-red-400'/>yamim@need-tech.co</p>
                </div>
                <div className='mt-5 py-5 p-5 sm:w-1/2 border-2  '>
                <form action="https://formsubmit.co/saimon.yamim@gmail.com" method="POST">

                    <label className='w-full'>Email Address</label>
                    <input type='text' palaceholder='enter you email address' className='w-10/12 border my-1'/>
                    {/* <textarea placeholder='write massage...' className='border '></textarea> */}
                    <button className='block py-1 px-2 bg-gray-800 text-white rounded'>submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
