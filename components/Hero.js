import React from 'react'
import Image from 'next/image'
export default function Hero() {
    return (
        <div className="w-full">
            <div  style={{backgroundImage:' url("../image/bgimg.jpg")',
            backgroundSize:'cover',width:'100vw',height:'100vh'}}>
                <h1>hello</h1>
            </div>
        </div>
    )
}
