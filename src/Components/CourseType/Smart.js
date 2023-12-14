import React from 'react'
import { Container } from 'react-bootstrap'
import SmartBg from "../assets/Smart11.png"
import { Link } from 'react-router-dom'
import "./CourseTypes.css"
import GetIn from '../GetIn/GetIn'
import Connect from '../Connect/Connect'

const CourseTypes = () => {
  return (
    <>

<Container fluid className="home_bg_div " style={{
  
  backgroundImage: `url(${SmartBg})`,
  backgroundRepeat: "no-repeat",
 backgroundSize:"100% 100%",
 backgroundPosition:"cover",
 //  backgroundColor:"#3C427B"

   }}>
<Container  >
<div className='banner_text_wrapper'>
<p className='page_heading' style={{color:"#ffffff"}}> Fueling Brilliance at JM Edu Educational Excellence Every Day</p>
<p className='banner_subheading'>Empowering Young Minds, Fostering Brilliance, Shaping Futures, and Achieving Excellence Together.</p>

<div><Link to="/contact"><button className='let_button '>LET'S TALK</button></Link></div>
</div>
</Container>
</Container>

  <Container fluid className='container_fluid'>
<Container className='excelinit_content_container'>
<p className='page_heading'>EXCEL IN SMART CHAMP WITH JM</p>
<p className='page_text '> Elevate your skills with Smart Champ at JM Edu. Our focused course ensures mastery, preparing you for success. Unlock your potential for excellence in the Smart Champ program, where we nurture your learning journey.</p>
</Container>

<wrapper className="Jee_cards_wrapper">
    <div className='Jee_cards'>
        <img src={require("../assets/excelicon.png")} alt=""/>
        <p className='mt-3'>Proficient</p>
        <p style={{marginTop:"-12px"}}>Educators</p>
    </div>

    <div className='Jee_cards'>
        <img src={require("../assets/excelicon.png")} alt=""/>
        <p className='mt-3'>Interactive</p>
        <p style={{marginTop:"-12px"}}>Learning</p>
    </div>

    <div className='Jee_cards'>
        <img src={require("../assets/excelicon.png")} alt=""/>
        <p className='mt-3'> Personalized </p>
        <p style={{marginTop:"-12px"}}>Attention</p>
    </div>

    <div className='Jee_cards'>
        <img src={require("../assets/excelicon.png")} alt=""/>
        <p className='mt-3'>Comprehensive </p>
        <p style={{marginTop:"-12px"}}>Study</p>
    </div>
</wrapper>
  </Container>

  <Container fluid className=' container_fluid mt-5'>
<Container className='yourpath_content_container'>
  <wrapper className="yourpath_textwrapper">
    <p className='page_heading'>Your Path to Academic Excellence Begins Here</p>
    <p className='page_text'>Ignite your academic prowess with Smart Champ at JM Edu. Our dynamic course not only imparts knowledge but fosters critical thinking, creativity, and leadership skills. Benefit from hands-on projects, collaborative learning, and dedicated mentors.</p>
    <p className='page_text'>Join JM Edu, Elevate your educational experience, your journey to academic excellence unfolds here. Join Smart Champ and shape a brilliant future.</p>
  </wrapper>

  <wrapper className="d-flex justify-content-center align-items-center">
    <img className='yourpath_img' src={require("../assets/rectangle1.png")} alt=""/>
  </wrapper>
</Container>
  </Container>

{/* about-jee */}

  <Container fluid className='container_fluid mt-5'>
<Container className='about_IITJEE_content_container'>
  <p className='page_heading'>ABOUT SMART CHAMP COURSE</p>
  <wrapper className="yourpath_textwrapper">
   <img className="jee_rect_img1 mt-3"src={require("../assets/rectangle10.png")}/>
  </wrapper>

  <wrapper>
 <p className='page_text mt-3'>Welcome to the Smart Champ Course at JM EDU! This transformative program covers attitude and leadership, SMART goals, study techniques, emotional intelligence, health and diet, time management, team building, self-confidence, public speaking, and mind and meta programming. Join us for a journey that equips you with the skills for academic excellence and leadership prowess. Thrive in every facet of life with Smart Champ.</p>
  </wrapper>
</Container>
  </Container>

{/* iit-jee-success */}
  <Container fluid className='container_fluid mt-5'>
<Container className='success_content_container'>
<wrapper className="d-flex justify-content-center align-items-center">
    <img className='jee_rect_img' src={require("../assets/rectangle12.png")} alt=""/>
  </wrapper>

  <wrapper className="yourpath_textwrapper">
    <p className='page_heading'>SMART CHAMP Success Starts Here</p>
    <p className='page_text'>Unlock your child's potential with JM's Smart Champ Course, the ultimate preparation for success in the JM exam. Our comprehensive curriculum is designed by experts to ensure a deep understanding of key concepts.</p>
    <p className='page_text'>Benefit from personalized progress tracking and expert guidance to enhance your child's performance. Trust JM for a holistic approach to exam preparation, setting the foundation for a successful future.</p>
  </wrapper>
</Container>
  </Container>

  {/*  */}
  <Container fluid className='container_fluid mt-5'>
<Container className='success_content_container'>
<wrapper className="d-flex justify-content-center align-items-center">
    <img className='jee_rect_img' src={require("../assets/rectangle11.png")} alt=""/>
  </wrapper>

  <wrapper className="yourpath_textwrapper">
    <p className='page_heading'>SMART CHAMP Guidance</p>
    <p className='page_text'>Welcome to Smart Champ Expert Guidance Personalized advice, holistic development, and cutting-edge insights define our approach. Our expert faculty, proven track record, and comprehensive support make us the choice for successful academic and career journeys.</p>
    <p className='page_text'>Stay informed with the latest exam updates, success stories Join us for excellence and growth. Your success is our mission!</p>
  </wrapper>
</Container>
  </Container>



  <Connect  connectTitle="CONNECT WITH US FOR SMART CHAMP EXAM"/>
  </>
  )
}

export default CourseTypes