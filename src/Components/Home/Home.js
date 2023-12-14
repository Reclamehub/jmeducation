import React from 'react'
import {  Container } from 'react-bootstrap'
import  Card  from '../Card/Card'
import { Link } from 'react-router-dom'
import "./Home.css"
import OurCourses from './OurCourses'
import Instructor from './Instructor'
import Register from './Register'
import Innovation from './Innovation'
import Testimonial from './Testimonial'
import GetIn from '../GetIn/GetIn'

const Home = () => {
  return (
    <>
<Container fluid className="home_bg_div " style={{
  
  backgroundImage: `url(${"../homebg.png"})`,
     backgroundRepeat: "no-repeat",
 backgroundSize:"100% 100%",
 backgroundPosition:"cover",
 //  backgroundColor:"#3C427B"

   }}>
<Container  >
<div className='banner_text_wrapper home_banner_wrapper' >
<p className='banner_heading' style={{color:"#ffffff"}} >Empowering Minds through Quality Education</p>
<p className='banner_subheading'> Welcome to JM Edu – Excellent education that nourishes minds, unleashes potential, and creates future possibilities.</p>

<div><Link to="/contact"><button className='let_button '>LET'S TALK</button></Link></div>
</div>
</Container>
</Container>

<Container className='home_cards_container'>
    <Card img= {require("../assets/hc1.png")} heading="210" text="Awards"/>
    <Card img= {require("../assets/hc2.png")} heading="350" text=" Achievements"/>
    <Card img= {require("../assets/hc3.png")} heading="27" text="Courses"/>
</Container>

<Container className='home_special_container'>
  <wrapper className="spcl_img_wrapper">
<img className="spcl_img_" src={require("../assets/group1.png")} alt=" "/>
  </wrapper>

  <wrapper className="home_points_wrapper" >
<p className='spcl_page_heading' style={{color:"#0D134F"}}>Specialized in IIT-JEE/ NEET/Foundation Course</p>

<div className='d-flex justify-content-center align-item-center'>
    <img className='spcl_icons' src={require("../assets/spclicon.png")} alt=""/>
    <div className=''>
    <p className='spcls_subheadings' style={{color:"#0D134F"}}>Courses for IIT-JEE/NEET-Medical/Foundation</p>
<p className='spcls_text' style={{color:"#0D134F"}}>We have developed programs that will enable you to be successful in Courses of IIT-JEE/NEET-Medical/Foundation Courses.</p>
    </div>
</div>

<div className='d-flex justify-content-center align-item-center mt-2'>
    <img className='spcl_icons' src={require("../assets/spclicon.png")} alt=""/>
    <div className='page_text'>
    <p className='spcls_subheadings' style={{color:"#0D134F"}}>Expert Guidance</p>
<p className='spcls_text'>Capitalize on our veteran instructors, the best facilities and time-tested strategy.</p>
    </div>
</div>

<div className='d-flex justify-content-center align-item-center mt-2'>
    <img className='spcl_icons' src={require("../assets/spclicon.png")} alt=""/>
    <div className='page_text'>
    <p className='spcls_subheadings' style={{color:"#0D134F"}}>Gateway to a Bright Future</p>
<p className='spcls_text'>Start your journey to fulfil your dreams today by enrolling on our IIT-JEE/NEET-Medical/Foundation Courses.</p>
    </div>
</div>
</wrapper>
</Container>

<OurCourses/>
<Instructor/>
<Register/>
<Innovation/>
<Testimonial/>

<GetIn/>
</>
  )
}

export default Home