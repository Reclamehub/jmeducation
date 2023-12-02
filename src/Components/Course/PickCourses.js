import React from 'react'
import { Container, Card } from 'react-bootstrap'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./PickCourses.css"


const courses = [
  { id: 1, title: 'IIT-JEE', image: require('../assets/cc1.png') },
  { id: 2, title: 'NEET-MEDICAL', image: require('../assets/cc2.png') },
  { id: 3, title: 'SMART CHAMP', image: require('../assets/cc3.png') },
  { id: 4, title: 'FOUNDATION COURSE', image: require('../assets/cc3.png') },
];

const PickCourses = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
   <Container fluid className='pickcourse_containerFluid container_fluid'>
<Container className='pickcourse_content_container'>
<wrapper>
    <p className='page_heading'>pick a courses to get started your study</p>
</wrapper>


<div className="pickCourses_cards_wrapper">
<Slider {...sliderSettings} className='pickcourse_slider'>
          {courses.map((course) => (
<Card key={course.id}className='pickcourse_cards'>
    <Card.Img className="pickcourse_card_img" variant="top" src={course.image}  />
    <Card.Body className='pickcourse_card_body mt-3'>
      <Card.Title className='pickcourse_card_heading'>{course.title}</Card.Title>
      <text className='pickcourse_card_heading'>Learn more  </text>
      </Card.Body>
  </Card>
      ))}
      </Slider>
</div>
</Container>
</Container>

  )
}

export default PickCourses