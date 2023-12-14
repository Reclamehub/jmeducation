import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import{FaPhoneAlt} from "react-icons/fa"
import "./Footer.css"

 const Footer = () => {


  return (
    <>
   <Container fluid  className='footer_container_fluid_lg'>

<Container className='footer_content_container'>

 <wrapper className="footer_wrapper1">
 <div><Link to="./home"><img className='footer_logo' src={require("../assets/Jmlogo1.png")} alt=""/></Link></div>
        <ul >
          <p className='page_text'>Quick Links </p>
          <Link to="./ home" className='footer_links'>  <p> Home</p></Link>
          <Link to="./about" className='footer_links'> <p> About</p></Link>
          <Link to="./course" className='footer_links'> <p> Course</p></Link>
          <Link to="./contact" className='footer_links'> <p> Contact</p></Link>
        </ul>
   </wrapper>

   <wrapper className="footer_wrapper1 mt-4">
        <ul>
        <p className='page_text'>Top courses </p>
 <Link to="./Jee" className='footer_links'> <p>IIT-JEE</p></Link>
 <Link to="./Neet" className='footer_links'> <p>NEET-MEDICAL</p></Link>
 <Link to ="./Smart" className='footer_links'> <p>Smart champ</p></Link>
     <Link to="./Foundation" className='footer_links'><p>Foundation courses</p></Link>
        </ul>
 </wrapper>

 <wrapper className="footer_wrapper1 mt-4">
        <ul>
        <p className='page_text'>Support  </p>
        <a  href ="https://jmeducation.in/terms&conditions" className='footer_links'> <p>Terms & Condition</p></a>
        <a href="https://jmeducation.in/privacypolicy" className='footer_links'> <p>Privacy Policy</p></a>
        </ul>
 </wrapper>

 <wrapper className="footer_wrapper2 mt-3">
  {/* <img className='footer_brand' src={require("../../assets/Alogo1.png")}alt=""/> */}
<p className='mt-2'>
Empowering Minds, Enriching Futures. Connect with JM Edu for a world of knowledge and limitless possibilities. Inspiring curiosity, fostering innovation, and nurturing dreams – we're here for every step of your educational journey. © 2023 JM Edu. All rights reserved. Explore our programs, discover your potential, and embark on a transformative learning experience.
</p>
<div className='d-flex justify-content-start align-items-center'>
<FaPhoneAlt  style={{marginLeft:"2px" ,marginTop:"-15px",marginRight:"7px"}}/>
<a className='footer_links' href="tel:7039571383"><p>+91-7039571383</p></a>
</div>

<div className='footer_social_links_div'>
  <a className='footer_links'href="https://www.facebook.com/jmeduinnovationworld"><img src={require("../assets/fFacebook.png")} alt=""/></a>
  <a className='footer_links' href="https://www.instagram.com/jm_edu_innovation/"><img src={require("../assets/finsta.png")} alt=""/></a>
  <a className='footer_links' href="https://wa.me/7039571383" > <img style={{height:"25px"}} src={require("../assets/fwhatsaap.png")} alt=""/></a>
  <a className='footer_links' href="https://www.linkedin.com/company/jm-edu-innovation/"><img src={require("../assets/flinkedin.png")} alt=""/></a>
  <a className='footer_links' href="https://twitter.com/JMEduInnovation"><img src={require("../assets/ftwitter.png")} alt=""/> </a>
  <a className='footer_links' href="https://in.pinterest.com/jmeduinnovation007/"><img src={require("../assets/fpinterest.png")} alt=""/></a>
</div>
<div>

</div>
<p>&copy; 2023 JM Education. All Rights Reserved</p>
    </wrapper>
</Container> 
   </Container>
{/*-------------------------------------------------------*/}
<Container fluid className='footer_container_fluid_sm'>
<Container className='sm_footer_content_container'>
<wrapper>
<div><Link to="./home"><img className='' src={require("../assets/Jmlogo1.png")} alt=""/></Link></div>
<p className='mt-2'>Empowering Minds, Enriching Futures. Connect with JM Edu for a world of knowledge and limitless possibilities. Inspiring curiosity, fostering innovation, and nurturing dreams – we're here for every step of your educational journey. © 2023 JM Edu. All rights reserved. Explore our programs, discover your potential, and embark on a transformative learning experience.</p>
</wrapper>

<wrapper className="sm_wrapper1">
  <div className='quicklinks_div'> 

          <p className='page_text'>Quick Links </p>
          <Link to="./ home" className='footer_links'>  <p> Home</p></Link>
          <Link to="./about" className='footer_links'> <p> About</p></Link>
          <Link to="./course" className='footer_links'> <p> Course</p></Link>
          <Link to="./contact" className='footer_links'> <p> Contact</p></Link>
     
        </div>

        <div className='quicklinks_div'>
      <p className='page_text'>Top courses </p>
 <Link to="./Jee" className='footer_links'> <p>IIT-JEE</p></Link>
 <Link to="./Neet" className='footer_links'> <p>NEET-MEDICAL</p></Link>
 <Link to ="./Smart" className='footer_links'> <p>Smart champ</p></Link>
     <Link to="./Foundation" className='footer_links'><p>Foundation <br/> courses</p></Link>
        </div>
      
      <div>
   <p className='page_text'>Support  </p>
        <a  href ="https://jmeducation.in/terms&conditions" className='footer_links'> <p>Terms & Condition</p></a>
        <a href="https://jmeducation.in/privacypolicy" className='footer_links'> <p>Privacy Policy</p></a>
        <a className='footer_links' href="tel:7039571383"><p>+91-7039571383</p></a>
      </div>
</wrapper>
</Container>
<Container>
<div className='sm_footer_social_links_div'>
  <a className='footer_links'href="https://www.facebook.com/jmeduinnovationworld"><img src={require("../assets/fFacebook.png")} alt=""/></a>
  <a className='footer_links' href="https://www.instagram.com/jm_edu_innovation/"><img src={require("../assets/finsta.png")} alt=""/></a>
  <a className='footer_links' href="https://wa.me/7039571383" > <img style={{height:"25px"}} src={require("../assets/fwhatsaap.png")} alt=""/></a>
  <a className='footer_links' href="https://www.linkedin.com/company/jm-edu-innovation/"><img src={require("../assets/flinkedin.png")} alt=""/></a>
  <a className='footer_links' href="https://twitter.com/JMEduInnovation"><img src={require("../assets/ftwitter.png")} alt=""/> </a>
  <a className='footer_links' href="https://in.pinterest.com/jmeduinnovation007/"><img src={require("../assets/fpinterest.png")} alt=""/></a>
</div>

<p className='copy_right'>&copy; 2023 JM Education. All Rights Reserved</p>
</Container>
</Container>

   </>
  )
}

export default Footer

