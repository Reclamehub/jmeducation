import React from 'react'
import { Container } from 'react-bootstrap'
import Admission from './Admission'
import Skill from './Skill'
import PickCourses from './PickCourses'
import Teacher from './Teacher'
import UpComing from './UpComing'

const Course = () => {
  return (
    <>
    <Container fluid className='about_container_fluid'>
<Container className='about_content_container'>
    <wrapper className="top_heading_wrapper">
<p className='page_heading' style={{color:"#fff"}}>Like what you are learning <br/> get centered toda</p>
<p className='page_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
</p>
    </wrapper>
    <wrapper className="top_img_wrapper">
<img className="top_img"src={require("../assets/about1.png")} alt=""/>
    </wrapper>
</Container>
    </Container>

    <Admission/>
    <Skill/>
    <PickCourses/>
    <Teacher/>
    <UpComing/>
    </>
  )
}

export default Course