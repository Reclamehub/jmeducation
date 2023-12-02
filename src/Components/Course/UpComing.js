import React from 'react'
import { Container,Card } from 'react-bootstrap'
import "./UpComing.css"
import GetIn from '../GetIn/GetIn'

const UpComing = () => {
  return (
    <>
 <Container fluid className='upcoming_containerFluid container_fluid'>
<Container>
    <p className='page_heading'>upcoming courses</p>
    <p className='page_text'> Embark on a transformative learning journey with JM Edu's upcoming courses tailored for Olympiad excellence, NDA achievements, and MPSC/UPSC success. Unleash your potential through comprehensive study materials, expert guidance, and strategic preparation. Elevate your academic prowess and career prospects.</p>

    <wrapper className="upcoming_card_courses_wrapper">
    
    <Card className='upcourse_cards'>
    <Card.Img className="up_card_img" variant="top" src={require("../assets/up1.png")}  />
    <Card.Body className='up_card_body mt-1'>
      <Card.Title className='up_card_heading'>Olympiad</Card.Title>
      <text className='up_card_heading'>Learn more  </text>
      </Card.Body>
  </Card>

  <Card className='upcourse_cards'>
    <Card.Img className="up_card_img" variant="top" src={require("../assets/up2.png")}  />
    <Card.Body className='up_card_body mt-1'>
      <Card.Title className='up_card_heading'>NDA</Card.Title>
      <text className='up_card_heading'>Learn more  </text>
      </Card.Body>
  </Card>

  <Card className='upcourse_cards'>
    <Card.Img className="up_card_img" variant="top" src={require("../assets/up3.png")}  />
    <Card.Body className='up_card_body mt-1'>
      <Card.Title className='up_card_heading'>MPSC / UPSC</Card.Title>
      <text className='up_card_heading'>Learn more  </text>
      </Card.Body>
  </Card>
    </wrapper>
</Container>
 </Container>

 <GetIn/>
 </>
  )
}

export default UpComing