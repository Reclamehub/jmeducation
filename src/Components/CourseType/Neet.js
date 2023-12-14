import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./CourseTypes.css"
import GetIn from '../GetIn/GetIn'
import NeetBg from "../assets/Neet11.png"
import Connect from '../Connect/Connect'

const CourseTypes = () => {
  return (
    <>
 <Container fluid className="home_bg_div " style={{
  
  backgroundImage: `url(${NeetBg})`,
  backgroundRepeat: "no-repeat",
 backgroundSize:"100% 100%",
 backgroundPosition:"cover",
 //  backgroundColor:"#3C427B"

   }}>
<Container  >
<div className='banner_text_wrapper'>
<p className='page_heading' style={{color:"#ffffff"}} >Empower Your Future with Expert-led Learning </p>
<p className='banner_subheading'>NEET-MEDICAL Success Starts Here JM Edu Your Path to Medical Excellence JM Edu NEET-MEDICAL Triumph Awaits.</p>

<div><Link to="/contact"><button className='let_button '>LET'S TALK</button></Link></div>
</div>
</Container>
</Container>

  <Container fluid  className='container_fluid jee_fluid'>
<Container className='excelinit_content_container'>
<p className='page_heading'>EXCEL IN NEET-MEDICAL WITH JM</p>
<p className='page_text'> Unlock your potential and excel in the NEET-MEDICAL with our comprehensive coaching program at JM Edu. We are committed to delivering high-quality education, empowering you to fulfill your aspirations of pursuing a career in medicine at esteemed institutions.</p>
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

  <Container fluid className=' container_fluid jee_fluid'>
<Container className='yourpath_content_container'>
  <wrapper className="yourpath_textwrapper">
    <p className='page_heading'>Your Path to Academic Excellence Begins Here</p>
    <p className='page_text'>Embark on a journey of excellence with our NEET-MEDICAL coaching curriculum at JM Edu. Our comprehensive program is crafted to enhance your problem-solving skills and master crucial concepts.</p>
    <p className='page_text'>Join our passionate educators who are committed to steering you towards success, ensuring you're thoroughly prepared to overcome the hurdles of  NEET-MEDICAL.</p>
  </wrapper>

  <wrapper className="d-flex justify-content-center align-items-center">
    <img className='yourpath_img' src={require("../assets/rectangle6.png")} alt=""/>
  </wrapper>
</Container>
  </Container>

{/* about-jee */}

  <Container fluid className='container_fluid jee_fluid'>
<Container className='about_IITJEE_content_container'>
    <p className='page_heading'>ABOUT NEET-MEDICAL COURSE</p>
  <wrapper className="yourpath_textwrapper">
   <img className="jee_rect_img1 mt-3"src={require("../assets/rectangle7.png")}/>
  </wrapper>

  <wrapper>
 <p className='page_text mt-3'>Welcome to JM Edu, and it is our NEET-MEDICAL course that is a landmark for future medical doctors. In total our curriculum encompasses the three NEET-MEDCAL subjects; physics, chemistry and physiology. We emphasize on interaction learning with regular doubt clearing sessions conducted to build confidence with our experienced faculty. Carry out mock tests and examinations to simulate the examinations environment.</p>
  </wrapper>
</Container>
  </Container>

{/* iit-jee-success */}
  <Container fluid className=' container_fluid jee_fluid'>
<Container className='success_content_container'>
<wrapper className="d-flex justify-content-center align-items-center">
    <img className='jee_rect_img' src={require("../assets/jee_rec1.png")} alt=""/>
  </wrapper>

  <wrapper className="yourpath_textwrapper">
    <p className='page_heading'>NEET-MEDICAL Success Starts Here</p>
    <p className='page_text'>JM Edu offers unparalleled support for NEET-MEDICAL preparations, featuring a dedicated team of expert faculty members committed to your success. Our top ranks speak to our effective teaching methods.</p>
    <p className='page_text'>The comprehensive study materials provided by JM Edu establish a solid foundation, covering all aspects of the NEET-MEDICAL syllabus.</p>
  </wrapper>
</Container>
  </Container>

  {/*  */}
  <Container fluid className=' container_fluid mt-5'>
<Container className='success_content_container'>
<wrapper className="d-flex justify-content-center align-items-center">
    <img className='jee_rect_img' src={require("../assets/rectangle3.png")} alt=""/>
  </wrapper>

  <wrapper className="yourpath_textwrapper">
    <p className='page_heading'>Expert NEET-MEDICAL Guidance</p>
    <p className='page_text'>JM Edu, your NEET-MEDICAL ally, offers expert guidance for success. Our seasoned faculty, proven track record, and tailored courses demystify NEET-MEDICAL complexities. From exam insights to personalized study plans, we pave the path to triumph.</p>
    <p className='page_text'>JM Edu where expertise meets aspiration. Stay informed with the latest exam updates, success stories.</p>
  </wrapper>
</Container>
  </Container>

<Connect  connectTitle="CONNECT WITH US FOR NEET-MEDICAL EXAM"/>
  </>
  )
}

export default CourseTypes