import React from 'react'
import { Container } from 'react-bootstrap'
import RegisterForm from "../RegisterForm/RegisterForm"
import "./Register.css"

const Register = () => {
  return (
    <Container fluid className='register_fluid' style={{backgroundColor:"#F9F9FA"}}>
        <Container className='register_content_container'>
  <wrapper className="register_text_wrapper">
<p className='page_text' >Register Now For A  Transformative Learning </p>
<p className='page_heading'>REGISTER NOW</p>
<p className='page_text'>Register now for a transformative learning experience at JM Education By joining our innovative programs, you'll have access to numerous opportunities for academic excellence, skill development, and personal growth. Take the first step towards a brighter and more successful educational journey today!</p>
  </wrapper>

<wrapper className="reg_form_wrapper">
    <RegisterForm/>

</wrapper>
</Container>
</Container>
  )
}

export default Register