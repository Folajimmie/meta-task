import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Metanfts from '../Components/Metanfts'
import Navbar from '../Components/Navbar'
import Partners from '../Components/Partners'
import Preview from '../Components/Preview'

const LandingPage = () => {
  return (
    <>
        <Navbar/>
        <Header />
        <Partners />
        <Preview />
        <Metanfts />
        <Footer />
    </>
  )
}

export default LandingPage