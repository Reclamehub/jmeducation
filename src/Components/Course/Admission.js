import React from 'react'
import { Container,Card } from 'react-bootstrap'
import AdmissionForm  from "../Course/AdmissionForm"
import "./Admission.css"

const Admission = () => {
  return (
  <Container className='admission_content_container'>
    <wrapper>
    <Card className='adimission_card'>
      <div>
      <Card.Img className='adimission_card_img' variant="top" src={require("../assets/adcardimg.png")} />
      <Card.Body style={{textTransform:"capitalize"}}>
      <Card.Text className='mt-3 card_heading1' >new batch</Card.Text>
        <Card.Title className='card_heading2'>Admission open</Card.Title>
        <div className='underline'></div>
        <Card.Text className='card_heading1'>JM edu innovation</Card.Text>
        </Card.Body>
        </div>
    </Card>
    </wrapper>

<wrapper>
<div >
<AdmissionForm/>
</div>
</wrapper>
  </Container>
  )
}

export default Admission