import React from 'react'
import Image from 'next/image'
export default function Hero() {
    return (
        <div className="w-full">
            <div  style={{backgroundImage:' url("../image/bgimg.jpg")',
            backgroundSize:'cover',height:'100vh'}}>
                <h1 className='flex justify-center text-white text-6xl items-center'>hello</h1>
            </div>
        </div>
    )
}
