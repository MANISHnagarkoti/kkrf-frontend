import React from 'react'
import Herosection from '../../component/Landing component/Herosection'
import States from '../../component/Landing component/States'
import Whoweare from '../../component/Home/Whoweare'
import Expertise from '../../component/Landing component/Expertise'
import Services from '../../component/Landing component/Services'
import BoxComponent from "../../component/Home/Box";
import Technology from './Technology'
import Choose from '../../component/Landing component/Choose'
import Project from '../../component/Landing component/Project'
import Businesses from '../../component/Landing component/Businesses'
import Client from '../../component/Landing component/Client'
import Question from '../../component/Landing component/Questions'
import Contactus from '../../component/Landing component/Contactus'
import Navbar from '../../component/Landing component/Navbar'
import Footer from '../../component/Landing component/Footer'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <States />
      <Whoweare />
      <Expertise />
      <Services />
      <BoxComponent />
      <Technology />
      <Choose />
      <Project />
      <Businesses />
      <Client />
      <Question />
      <Contactus />
      <Footer />

    </div>
  )
}
export default Landing
