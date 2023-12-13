import React from 'react'
import { Container } from 'react-bootstrap'
import "./Skill.css"

const Skill = () => {
  return (
   <Container fluid className='skill_containerFluid container_fluid'>
<Container className="skill_content_container">
<wrapper className="maincourse_img_wrapper">
<img  className="skill_img"src={require("../assets/skillimg.png")} alt=''/>

</wrapper>
<wrapper className="maincourse_text_wrapper">
<p className='page_heading'> grow your skill</p>
<p className='page_text'>Sharpen your skills with JM Edu's dedicated courses. From IIT-JEE/NEET-MEDICAL/ Foundation Course prep to Smart Champ programs, we offer tailored learning experiences to foster your growth exponentially.</p>
<p className='page_text'>Elevate your abilities and stay ahead with our skill-focused approach. Choose JM Edu for a transformative learning journey.</p>
</wrapper>
</Container>
   </Container>
  )
}

export default Skill