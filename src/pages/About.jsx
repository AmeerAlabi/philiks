import React from 'react'
import Heroa from '../components/Heroa'
import Vid from '../components/Vid'
import Story from '../components/Story'
import Mission from '../components/Mission'
import Team from '../components/Team'
import Footer from '../components/Footer'
import FAQReviewSection from '../components/Faq'
import Achievements from '../components/Achievements'

const About = () => {
  return (
    <div>
      <Heroa />
      <div className=" mt-[50px] ">
      <Vid />
      <Story />
      <Achievements />
      <Mission />
      <FAQReviewSection />
      <Footer/>
      </div>
    </div>
  )
}

export default About
