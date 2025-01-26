import React from 'react'
import Heroa from '../components/Heroa'
import Vid from '../components/Vid'
import Story from '../components/Story'
import Mission from '../components/Mission'
import Team from '../components/Team'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Heroa />
      <div className=" mt-[50px] ">
      <Vid />
      <Story />
      <Mission />
      <Team />
      <Footer/>
      </div>
    </div>
  )
}

export default About
