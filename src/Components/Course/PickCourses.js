import React from 'react';
import { Container, Card } from 'react-bootstrap';
import {IoIosArrowRoundForward} from "react-icons/io"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PickCourses.css';

const courses = [
  { id: 1, title: 'IIT-JEE', image: require('../assets/pc1.png') },
  { id: 2, title: 'NEET-MEDICAL', image: require('../assets/pc2.png') },
  { id: 3, title: 'SMART CHAMP', image: require('../assets/pc3.png') },
  { id: 4, title: 'FOUNDATION COURSE', image: require('../assets/pc4.png') },
];

const OurCourses = () => {
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
    <Container fluid className='course_container_fluid'>
      <Container className='center_heading_div'>
        <p className='page_heading pickcourse_heading'>pick a courses to get started your study</p>
   
      </Container>

      <Container className='courses_content_container'>
        <Slider {...sliderSettings} className='course_slider'>
          {courses.map((course) => (
            <Card key={course.id} className='course_card' style={{opacity:"1"}}>
              <Card.Img className='pickcourse_card_img' variant='top' src={course.image} />
              <Card.Body className='mt-4 pickcourse_card_body' style={{opacity:"1"}}>
                <Card.Title className='course_card_title'>{course.title}</Card.Title>
                <div className='d-flex justify-content-start align-items-center'>
                <p className='pickcourse_card_link'>Learn more</p>
                <IoIosArrowRoundForward style={{marginTop:"-12.6px",marginLeft:"5px"}}/>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Slider>
      </Container>
    </Container>
  );
};

export default OurCourses;
