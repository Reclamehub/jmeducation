import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Testimonial.css";

const Clients = () => {
  const data = [
    {
     name:"Shivam Patil",
   text: "The in-depth analysis of my performance in mock tests pinpointed my weak spots, enabling targeted revision.",
   percentage:"98 % percentile",
   course:"UG - JEE"
    },
    {
      name:"Sanika Joshi ",
    text: "The personalized study plans tailored to my strengths and weaknesses played a crucial role in my success in JEE.",
    percentage:"96 % percentile",
    course:"UG - JEE"
     },
     {
      name:"Vedang Mhatre ",
    text: "The doubt resolution system ensured that I never got stuck on any problem for too long, keeping my preparation on track.",
    percentage:"98 % percentile",
    course:"MHT - CET"
     },
     {
      name:"Aditya Rasal",
    text: "Being able to study anytime, anywhere through the app made balancing school and NEET prep much more manageable.",
    percentage:"707 / 720",
    course:"UG - NEET"
     },
  
  ];
  const settings = {
 
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: false,

    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
   
    <Container fluid className='testi_client_containerFluid'>
      <div className="exp_heading_wrapper" style={{ margin: "auto", display: "flex", justifyContent: "center", textAlign: "center", width: "95%" }}>
        <div className='exp_heading_div'   >
          <heading className="page_heading ">student testimonial</heading>
          <p className='page_text mt-3'>Hear from our students as they narrate their success and satisfaction transformation experience in JM Education.</p>
        </div>
     </div>

    <div className='slider_main_div mt-3'
        style={{
          height: 'auto',
          margin: "auto",
    }}
      >
       {console.log("length",data.length)}
        <Container fluid className='' >
          <Slider {...settings} className='slider'>
            {data.map((item, index) => (
              <div key={index} className='slider-item'>
                <p className='testimonial-text '>{item.name}</p>
                <p className='testimonial-text mt-3'>{item.text}</p>
                <p className='testimonial-text mt-3'>{item.percentage}</p>
                <p className='testimonial-text'>{item.course}</p>
              </div>
            ))}
          </Slider>
        </Container>
   
</div>
    </Container>

  );
}

export default Clients;

