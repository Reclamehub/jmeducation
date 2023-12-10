import React from 'react'
import { Container } from 'react-bootstrap'
import "./Instructor.css"

const Instructor = () => {
  return (
   <Container fluid className='inst_content_containerFluid'>
    <Container className='inst_content_container'>
<div className='inst_text_wrapper'>
<p className='page_heading'>Meet Inspiring  Instructor</p>
<p className='page_text'>At JM Education, we firmly believe that the right instructor can significantly impact your learning journey. Our team of online instructors are not merely educators, but also mentors, guides, and catalysts for your success.</p>
<p className='page_text'>We invite you to get to know the passionate individuals who will inspire and support you on your path to academic excellence. Join us on this transformational journey in education where knowledge meets inspiration and together we create a future full of possibilities.</p>
</div>

<div className='instructor_img_wrapper'>
    <img className='instructor_img' src={require("../assets/inspiringimg1.png")} alt=""/>
</div>
    </Container>
   </Container>
  )
}

export default Instructor