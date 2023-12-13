import React from 'react'
import { Container,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import aboutBg from "../assets/about11.png"
import GetIn from '../GetIn/GetIn'
import {IoIosArrowRoundForward} from "react-icons/io"
import "./About.css"

// performance to enjoyment, we gotcha
const About = () => {
  return (
    <>
<Container fluid className="home_bg_div " style={{
  
       backgroundImage: `url(${aboutBg})`,
          backgroundRepeat: "no-repeat",
      backgroundSize:"100% 100%",
      backgroundPosition:"cover",
      //  backgroundColor:"#3C427B"
     
        }}>
<Container  >
  <div className='banner_text_wrapper'>
  <p className='banner_heading' style={{color:"#ffffff"}} >Empowering Futures, Transforming Lives</p>
  <p className='banner_subheading'>At JM Edu, we fuel aspirations with innovative education, empowering individuals to forge their desired futures through knowledge.</p>

  <div><Link to="/contact"><button className='let_button '>LET'S TALK</button></Link></div>
  </div>
</Container>
</Container>
{/* cards */}
    <Container className='about_cards_container '>
   <Card className='about_card'>
      <Card.Img className="about_card_img"variant="top" src={require("../assets/ac1.png")}  />
      <Card.Body className='about_cards_body'>
        <Card.Title className='about_topcards_title'>Experience Mentors  </Card.Title>
        <text className='about_cards_text mt-2'>Elevate your education with JM Edu's exceptional mentors, bringing a wealth of experience to guide your academic journey</text>
        </Card.Body>
    </Card>
    <Card className='about_card'>
      <Card.Img className="about_card_img"variant="top" src={require("../assets/ac2.png")}  />
      <Card.Body className='about_cards_body'>
        <Card.Title className='about_topcards_title'>live Projects</Card.Title>
        <text className='about_cards_text mt-2'>Immerse yourself in real-world challenges and elevate your skills through hands-on experience with our live projects</text>
        </Card.Body>
    </Card>
    <Card className='about_card'>
      <Card.Img className="about_card_img"variant="top" src={require("../assets/ac3.png")}  />
      <Card.Body className='about_cards_body'>
        <Card.Title className='about_topcards_title'>Flexibility</Card.Title>
        <text className='about_cards_text mt-2'>Empower your learning journey with a flexible platform tailored to your schedule, allowing you to thrive at your own pace</text>
        </Card.Body>
    </Card>

    <Card className='about_card'>
      <Card.Img className="about_card_img"variant="top" src={require("../assets/ac4.png")}  />
      <Card.Body className='about_cards_body'>
        <Card.Title className='about_topcards_title'>Classes</Card.Title>
        <text className='about_cards_text mt-2'>Transform your learning experience with engaging classes led by experts, designed to fuel your knowledge and passion</text>
        </Card.Body>
    </Card>
    </Container>
{/* about us */}
    <Container fluid className='about2_container_fluid container_fluid'>
      <Container className='aboutus_flex_wrapper'>
<div className='d-flex justify-content-center'>
<img className='aboutus_img' src={require("../assets/about2.png")}alt=""/>
</div>

<div className='aboutus_text_wrapper'>
<p className='page_heading'>about us</p>
<p className='page_text'>Welcome to JM Education! Over the past 20 years, we have been driven by passion and purpose. It’s not about the years; it is about the stories of the lives we have turned around.</p>
<p className='page_text'>Education hub is not ordinary, we have a purpose we want to achieve- to build skills, light up minds, and a brighter future. </p>
</div>
      </Container>
    </Container>

{/* vision */}
    <Container fluid className='vision_containerFluid container_fluid'>
      <Container className='aboutus_flex_wrapper'>
     <div className='d-flex justify-content-center'>
<img className='aboutus_img' src={require("../assets/about3.png")}alt=""/>
</div>

<div className='aboutus_text_wrapper'>
<p className='page_heading'>our vision</p>
<p className='page_text'>The vision at JM Education is to serve as a source of lights and knowledge, establishing a world whereby education goes beyond limits. The future vision for us is a planet where people are equipped with the right knowledge, mindset, and spirit to drive leadership and creativity.</p>
</div>
    </Container>
    </Container>

    <Container fluid className='mission_containerFluid container_fluid'>
      <Container style={{width:"95%"}}>
        <p className='page_heading'>our mission</p>
        <p className='page_text'>Transformation for our learners is more than just knowledge at JM Edu. It is tapping all the potential. We promote the strength of all individuals to reach their full potential, excellence, innovativeness, and holism. 
        We aim to create complete students with the academic competence and the knowledge to thrive in the complex world. Explore the limitless possibilities at JM Edu, where education meets empowerment. At JM Edu, we foster an environment that goes beyond the conventional classroom encouraging students to embrace curiosity and think critically.</p>
      </Container>
</Container>
{/* founder */}
<Container fluid className='Founder_containerFluid container_fluid'>
      <Container className='founder_content_div'>
      <div className='founder_text_wrapper'>
<p className='page_heading'>Founder</p>
<p style={{fontWeight:"800"}}>Mrs. Jyoti Thakur Vartak</p>
<p className='page_text'>With over two decades in education, Mrs. Jyoti Thakur Vartak brings a wealth of experience. Starting as a teacher, she gained valuable insights into classroom dynamics. Transitioning to the tech sector, she excelled in user experience design and product management, honing her skills in creating effective, learner-centric solutions.</p>
      </div>

      <div>
<img  className='mission_img' src={require("../assets/about4.png")}alt=""/>
      </div>
      </Container>
</Container>
{/* co-founder */}
<Container fluid className='Founder_containerFluid container_fluid'>
      <Container className='founder_content_div'>
      <div className='founder_text_wrapper'>
<p className='page_heading'>Co-Founder & CEO</p>
<p style={{fontWeight:"800"}}>Mr. Manohar Vartak</p>
<p className='page_text'>With the goal of revolutionizing the accessibility and delivery of education, Mr. Manohar Vartak co-founded our EdTech company and has fifteen years of broad and diverse experience in the domains of technology and education. After holding executive roles in renowned educational technology businesses.</p>
<p className='page_text'>Mr. Manohar Vartak co-founded the business and played a key role in developing innovative solutions to enhance the educational process.</p>
      </div>
 <div>
<img className='mission_img'  src={require("../assets/about5.png")}alt=""/>
      </div>
      </Container>
</Container>
{/* explore */}
<Container fluid className='Founder_containerFluid container_fluid'>
      <Container className='founder_content_div'>
      <div className='founder_text_wrapper'>
<p className='page_heading'>Explore Our Premier Courses</p>
<p className='page_text '>JM Edu welcomes you to the world of academic excellence. Our school provides carefully crafted courses that help students excel in competitive exams and build a sturdy foundation for their career. For the individuals who are aspiring to crack IIT-JEE/NEET-Medical/Foundation Courses or those who want to have holistic development through our Smart Champ program have the right skills and resources to facilitate the educational journey.</p>

<div className='d-flex justify-content-center  align-items-center'>
  <Link className='explore_link'  to="/contact"><p style={{color:"#E72078"}}> contact us  </p></Link>
  <IoIosArrowRoundForward className='arrow_icon'/>
  </div>
  
    </div>
 <div>
<img  className='mission_img' src={require("../assets/about6.png")}alt=""/>
      </div>
      </Container>
</Container>

<GetIn/>
    </>
  )
}

export default About