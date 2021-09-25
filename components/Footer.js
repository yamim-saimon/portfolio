import React from 'react'
import {FaFacebook,FaLinkedin,FaYoutube,FaGithub,FaTwitter} from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='w-full bg-blue-500'>
            <div className='w-full flex justify-center items-center h-20 text-white sm:w-8/12 mx-auto'>
        
                <span><i className='px-10 text-xl border-red-600'><FaFacebook/></i></span>
                <span><i className='px-10 text-xl'><FaLinkedin/></i></span>
                <span><i className='px-10 text-xl'><FaGithub/></i></span>
                <span><i className='px-10 text-xl'><FaTwitter/></i></span>
            </div>
        </div>
    )
}
