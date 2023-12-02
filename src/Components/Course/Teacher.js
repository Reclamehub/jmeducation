import React from 'react'
import { Container } from 'react-bootstrap'
import "./Teacher.css"

const Teacher = () => {
  return (
   <Container fluid className='teacher_container_Fluid container_fluid'>
<Container className='teacher_content_container'>
    <p className='page_heading teacher_heading'>meet the teacher who teaches you online</p>
    <p className='page_text'>Welcome to JM Edu, where inspiration and education collide in the virtual world of information and learning! It's about the trip, not just the courses, and your committed mentor and guide will be at the center of it all.</p>
    <wrapper className="teachers_images_wrapper">
        <div className='d-flex flex-column justify-content-center align-items-center'>
<img src={require("../assets/t1.png")}alt=""/>
<p >Dr. Rajesh Kumar</p>
<p style={{marginTop:"-15px"}}> EdTech Expert</p>
</div>

<div className='d-flex flex-column justify-content-center align-items-center'>
<img src={require("../assets/t2.png")}alt=""/>
<p>Mr. Arjun Mehra </p>
<p style={{marginTop:"-15px"}}>Digital Education Mentor</p>
</div>

<div className='d-flex flex-column justify-content-center align-items-center'>
<img src={require("../assets/t3.png")}alt=""/>
<p>Dr. Vivek Gupta</p>
<p style={{marginTop:"-15px"}}>Online Assessment Guru</p>
</div>

<div className='d-flex flex-column justify-content-center align-items-center'>
<img src={require("../assets/t4.png")}alt=""/>
<p>Ms. Priya Verma</p>
<p style={{marginTop:"-15px"}} > Virtual Classroom Pioneer</p>
</div>


    </wrapper>
</Container>
   </Container>
  )
}

export default Teacher