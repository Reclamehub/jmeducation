import React from 'react'
import { Container } from 'react-bootstrap'
import "./CourseTypes.css"
import GetIn from '../GetIn/GetIn'
import Connect from '../Connect/Connect'

const CourseTypes = () => {
  return (
    <>
 
  <Container fluid className='about_container_fluid '>
<Container className='about_content_container'>
    <wrapper className="abouttop_heading_wrapper">
<p className='page_heading' style={{color:"#fff"}}>Transforming Futures, <br/>Enriching Minds at JM Edu</p>
<p className='banner_subheading'>Unlock Your Potential with JM Transformative Education for a Brighter Future. Explore Courses, Ignite Learning, Achieve Success.
</p>
    </wrapper>
    <wrapper className="top_img_wrapper">
<img className="top_img"src={require("../assets/Jee.png")} alt=""/>
    </wrapper>
</Container>
    </Container>

<Container className='excelinit_content_container'>

<p className='page_heading'>EXCEL IN IIT-JEE WITH JM</p>
<p className='page_text'> Unlock your potential and ace the IIT-JEE with our comprehensive IIT/JEE coaching program. At JM Edu, we're dedicated to providing top-notch education, empowering you to achieve your dreams of pursuing engineering at premier institutions.</p>
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
 

  <Container fluid className='container_fluid mt-5'>
<Container className='yourpath_content_container'>
  <wrapper className="yourpath_textwrapper">
    <p className='page_heading'>Your Path to Academic Excellence Begins Here</p>
    <p className='page_text'>Unlock a world of opportunities with our comprehensive IIT-JEE coaching curriculum designed to hone your problem-solving abilities and master key concepts. Embark on a transformative learning journey at JM Edu.</p>
    <p className='page_text'>where passionate educators guide you towards success, ensuring you're well-prepared to conquer the challenges of the IIT-JEE</p>
  </wrapper>

  <wrapper className="d-flex justify-content-center align-items-center">
    <img className='yourpath_img' src={require("../assets/rectangle1.png")} alt=""/>
  </wrapper>
</Container>
  </Container>

{/* about-jee */}

  <Container fluid className=' container_fluid  mt-5'>
<Container className='about_IITJEE_content_container'>
  <p className='page_heading'>ABOUT IIT-JEE COURSE</p>
  <wrapper className="yourpath_textwrapper">
   <img className="jee_rect mt-3"src={require("../assets/rectangle2.png")}/>
  </wrapper>

  <wrapper>
 <p className='page_text mt-3'>Welcome to JM Edu, where we pave the way for academic excellence in the field of engineering through the Joint Entrance Examination IIT-JEE. At JM Edu, we understand the significance of IIT-JEE in shaping the future of aspiring engineers. Our comprehensive coaching program is Carefully designed to empower students with the knowledge and skills needed to excel in this highly competitive examination.</p>
  </wrapper>
</Container>
  </Container>

{/* iit-jee-success */}
  <Container fluid className='container_fluid mt-5'>
<Container className='yourpath_content_container'>
<wrapper className="d-flex justify-content-center align-items-center">
    <img className='jee_rect' src={require("../assets/jee_rec1.png")} alt=""/>
  </wrapper>

  <wrapper className="yourpath_textwrapper">
    <p className='page_heading'>IIT-JEE Success Starts Here</p>
    <p className='page_text'>Choose JM Edu for your IIT-JEE preparations and embark on a journey to success. Our expert faculty, proven track record of top ranks, and comprehensive study materials ensure a robust foundation.</p>
    <p className='page_text'>With regular assessments, and continuous support, we go beyond traditional coaching to nurture your potential and guide you towards excellence in IIT-JEE and beyond.</p>
  </wrapper>
</Container>
  </Container>

  {/*  */}
  <Container fluid className='container_fluid mt-5'>
<Container className='yourpath_content_container'>
<wrapper className="d-flex justify-content-center align-items-center">
    <img className='jee_rect' src={require("../assets/rectangle3.png")} alt=""/>
  </wrapper>

  <wrapper className="yourpath_textwrapper">
    <p className='page_heading'>Expert IIT-JEE Guidance</p>
    <p className='page_text'>JM Edu provides expert IIT-JEE guidance with tailored study plans, subject-wise strategies, and valuable tips. Their website features updated mock tests, video lectures, and interactive doubt clearing sessions.</p>
    <p className='page_text'>Stay informed with the latest exam updates, success stories, and personalized counseling for effective preparation.</p>
  </wrapper>
</Container>
  </Container>

<Connect/>
  </>
  )
}

export default CourseTypes