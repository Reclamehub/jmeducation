import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OurCourses.css';

const courses = [
  { id: 1, title: 'IIT-JEE', image: require('../assets/cc1.png') },
  { id: 2, title: 'NEET-MEDICAL', image: require('../assets/cc2.png') },
  { id: 3, title: 'SMART CHAMP', image: require('../assets/cc3.png') },
  { id: 4, title: 'FOUNDATION COURSE', image: require('../assets/cc4.png') },
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
    arrows:false,
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
      <div className='center_heading_div'>
        <p className='page_heading'>our popular courses</p>
        <p className=' course_subheading_div'>
        Get ready to shine in IIT-JEE/NEET-Medical/Foundation Courses and SMART CHAMP classes at JM Edu! Get the right education that will lead you to the top! Come on!
        </p>
      </div>

      <Container className='courses_content_container'>
        <Slider {...sliderSettings} className='course_slider'>
          {courses.map((course) => (
            <Card key={course.id} className='course_card'>
              <Card.Img className='course_card_img' variant='top' src={course.image} />
              <Card.Body className='mt-3 course_card_body'>
                <Card.Title className='course_card_title'>{course.title}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </Slider>
      </Container>
    </Container>
  );
};

export default OurCourses;
