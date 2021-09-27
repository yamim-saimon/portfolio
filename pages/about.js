import React from 'react'
import Link from 'next/Link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AboutMe from '../components/AboutMe'

export default function about() {
    return (
        <div>
            <Navbar/>
            <h1>about</h1>
            <AboutMe />
            <Footer/>
        </div>
    )
}
