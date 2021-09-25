import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='w-full h-16 flex bg-gray-700  items-center'>
            <nav className='w-8/12 mx-auto text-white font-bold flex justify-between'>
                <div className='text-2xl'><Link href='/'><a>Logo </a></Link></div>
                <div className='font-semibold flex-end'>
                    <Link href='/' ><a className='px-3 active:text-green-400'>Home</a></Link>
                    <Link href='/'><a className='px-3'>About</a></Link>
                    <Link href='/'><a className='px-3'>Portfolio</a></Link>
                    <Link href='/'><a className='px-3'>Contact</a></Link>
                </div>
            </nav>
        </div>
    )
}
