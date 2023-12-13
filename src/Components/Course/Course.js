import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Admission from './Admission'
import Skill from './Skill'
import PickCourses from './PickCourses'
import Teacher from './Teacher'
import courseBg from "../assets/course11.png"
import UpComing from './UpComing'
import "./Course.css"

const Course = () => {
  return (
    <>
<Container fluid className="home_bg_div " style={{
  
  backgroundImage: `url(${courseBg})`,
  backgroundRepeat: "no-repeat",
 backgroundSize:"100% 100%",
 backgroundPosition:"cover",
 //  backgroundColor:"#3C427B"

   }}>
<Container  >
<div className='banner_text_wrapper'>
<p className='banner_heading' style={{color:"#ffffff"}} >Unlock Your Potential with JM Edu Courses </p>
<p className='banner_subheading'> Explore our diverse range of courses designed to ignite your curiosity and boost your career.</p>

<div><Link to="/contact"><button className='let_button '>LET'S TALK</button></Link></div>
</div>
</Container>
</Container>

    <Admission/>
    <Skill/>
    <PickCourses/>
    {/* <Teacher/> */}
    <UpComing/>
    </>
  )
}

export default Course