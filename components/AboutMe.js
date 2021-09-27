import React from 'react'
import {FaJava,FaPhp, FaPython,FaHtml5,FaCss3,FaBootstrap,FaDatabase,FaReact,} from 'react-icons/fa'

export default function AboutMe() {
    return (
        <div className='w-full flex-col  sm:w-8/12 bg-white'>
            <div><h1 className='flex justify-center my-10 text-gray-600 text-5xl font-semibold'>About Me</h1></div>
            <div className='w-full  mx-auto border-4 border-green-600 bg-gray-200  sm:w-full md:flex  '>
                <div className='w-full sm:w-6/12 mx-auto border-white border-4'>
                    
                    <img src='/image/aboutimg.png' width={350} height={350} />
                    <p className='m-5 '>Hello, there. I'm <strong>Yamim Hassan .</strong>A computer science graduate. Currently working as COO of <strong>"Need Tech".</strong> </p>
                </div>
                <div className='w-full sm:w-6/12 mx-auto border-white border-4'>
                    <h1 className='text-2xl font-bold flex justify-center '>Skills</h1>
                    <div className='m-5'>
                        <p className='font-semibold'>Programming Language</p>
                        
                        <div>
                           <p> C, C++, Java, Python, Php, Javascript, Html5</p>
                        </div>
                      <p className='font-semibold'>Frontend Library</p>
                            <div>
                                <p>ReactJs, NextJs</p>
                            </div>
                        <p className='font-semibold'>Framework</p>
                        <div>
                            <p>Bootstrap, Tailwind css</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
