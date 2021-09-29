import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from '../components/AboutMe'
import Link from 'next/link'
import ContactComponent from '../components/ContactComponent'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>yamim hasan portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero/>
      <About/>
      <div className='my-10'><ContactComponent/></div>
      <Footer/>
        
    </div>
  )
}
