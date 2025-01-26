import React from 'react'
import Contact from '../components/Contact'
import Plans from '../components/Plans'
import Learning from '../components/Learning'
import Collab from '../components/Collab'
import Content from '../components/Content'
import Dashboard from '../components/Dashboard'
import Vid from '../components/Vid'
import Features from '../components/Features'
import Tutors from '../components/Tutors'
import Uni from '../components/Uni'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Home = () => {
  return (
<div>
  <Hero />
  <Uni />
  <Tutors />
  <Features />
  <Vid />
    <Dashboard />
    <div className="my-[100px]">
    <Content />
    </div>
    <div className="my-[100px]">
    <Collab />
    </div>
    <div className="my-[100px]">
    <Learning />
    </div>
    <Plans />
    <Contact />
    <Footer />
    </div>
  )
}

export default Home
