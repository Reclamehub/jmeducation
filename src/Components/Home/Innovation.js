import React from 'react'
import { Container,Card } from 'react-bootstrap'
import "./Innovation.css"

const Innovation = () => {
  return (
   <Container fluid className='innovation_containerFluid'>
    <Container>
    <div className='center_heading_div'>
    <p className='page_heading'>our innovation</p>
    <p className='page_text'>Our smart modules, virtual labs, and simulations to the future of education. Get a cutting-edge tech and pedagogy experience for an engaging learning journey.</p>
  </div>
    </Container>
 <Container className='innovation_content_container'>
    <Card className='innovation_cards'>
      <Card.Img className="innovation_card_img"variant="top" src={require("../assets/I1.png")} />
      <Card.Body className='innovation_card_body mt-1'>
        <Card.Title className='our-card-heading'>Smart Student</Card.Title>
        <text className='our-card-heading'>Champ Program</text>
        </Card.Body>
    </Card>

    <Card className='innovation_cards'>
      <Card.Img className="innovation_card_img"variant="top" src={require("../assets/I2.png")}  />
      <Card.Body className='innovation_card_body mt-1'>
        <Card.Title className='our-card-heading'>Online Exam</Card.Title>
        <text className='our-card-heading'>Preparations </text>
        </Card.Body>
    </Card>

    <Card className='innovation_cards'>
      <Card.Img className="innovation_card_img"variant="top" src={require("../assets/I3.png")}  />
      <Card.Body className='innovation_card_body mt-1'>
        <Card.Title className='our-card-heading' >Communication</Card.Title>
        <text className='our-card-heading'>Skills</text>
        </Card.Body>
    </Card>
    </Container>
   </Container>
  )
}

export default Innovation