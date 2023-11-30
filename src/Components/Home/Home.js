import React from 'react'
import {  Container } from 'react-bootstrap'
import  Card  from '../Card/Card'
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
    <Container fluid className='home_container_fluid' style={{
         backgroundImage: `url('../homebg.png')`,
         backgroundSize: '100% 100%',
         backgroundRepeat: 'no-repeat',
    }}>
<Container className='home_content_container'>
    <wrapper className="top_heading_wrapper">
<p className='page_heading' style={{color:"#fff"}}>Empowering Minds Through   Quality Education</p>
<p className='page_text'> Welcome to JM Edu – Excellent education that nourishes minds, unleashes potential, and creates future possibilities.</p>
    </wrapper>
    <wrapper className="top_img_wrapper">
<img className="top_img"src={require("../assets/home.png")} alt=""/>
    </wrapper>
</Container>
    </Container>

<Container className='home_cards_container'>
    <Card img= {require("../assets/hc1.png")} heading="210" text="Awards"/>
    <Card img= {require("../assets/hc2.png")} heading="350" text=" Achievements"/>
    <Card img= {require("../assets/hc3.png")} heading="25" text="courses"/>
</Container>

<Container className='home_special_container'>
  <wrapper className="spcl_img_wrapper">
<img className="spcl_img_" src={require("../assets/group1.png")} alt=" "/>
  </wrapper>

  <wrapper className="home_points_wrapper" >
<p className='page_heading'>Specialized Courses for JEE\CET Entrance Exams</p>

<div className='d-flex justify-content-center align-item-center'>
    <img className='spcl_icons' src={require("../assets/icon.png")} alt=""/>
    <div className=''>
    <p className='spcls_subheadings'>Courses for IIT-JEE/NEET-Medical/Foundation</p>
<p className='spcls_text'>We have developed programs that will enable you to be successful in Courses of IIT-JEE/NEET-Medical/Foundation Courses.</p>
    </div>
</div>

<div className='d-flex justify-content-center align-item-center'>
    <img className='spcl_icons' src={require("../assets/icon.png")} alt=""/>
    <div className='page_text'>
    <p className='spcls_subheadings'>Expert Guidance</p>
<p className='spcls_text'>Capitalize on our veteran instructors, the best facilities and time-tested strategy.</p>
    </div>
</div>

<div className='d-flex justify-content-center align-item-center'>
    <img className='spcl_icons' src={require("../assets/icon.png")} alt=""/>
    <div className='page_text'>
    <p className='spcls_subheadings'>Gateway to a Bright Future</p>
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