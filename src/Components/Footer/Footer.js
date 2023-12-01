import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Footer.css"

 const Footer = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [errors, setErrors] = useState({ email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validation logic for the email field (you can modify this to suit your requirements)
    if (name === 'email') {
      if (!value) {
        setErrors({
          ...errors,
          email: 'Email is required',
        });
      } else if (!isValidEmail(value)) {
        setErrors({
          ...errors,
          email: 'Invalid email format',
        });
      } else {
        setErrors({
          ...errors,
          email: '',
        });
      }
    }
  };
  const handleButtonClick = () => {
 
  setFormData({ email: '' });
  };
  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };  
  return (
    <>
   <Container fluid  className='footer_container_fluid_lg'>
<Container className='footer_content_container'>

<wrapper className="footer_wrapper1">
  {/* <img className='footer_brand' src={require("../../assets/Alogo1.png")}alt=""/> */}
<p className='mt-2'>
Empowering Minds, Enriching Futures. Connect with JM Edu for a world of knowledge and limitless possibilities. Inspiring curiosity, fostering innovation, and nurturing dreams – we're here for every step of your educational journey. © 2023 JM Edu. All rights reserved. Explore our programs, discover your potential, and embark on a transformative learning experience.
</p>
<div>

</div>
<p>&copy; 2023 JM Education. All Rights Reserved</p>
    </wrapper>


    <wrapper className="footer_wrapper2">
        <ul >
          <p className='page_text'>Quick Links </p>
          <Link to="./ home" className='footer_links'>  <p> Home</p></Link>
          <Link to="./about" className='footer_links'> <p> About</p></Link>
          <Link to="./course" className='footer_links'> <p> Course</p></Link>
          <Link to="./contact" className='footer_links'> <p> Contact</p></Link>
        </ul>
   </wrapper>

   <wrapper className="footer_wrapper2">
        <ul>
        <p className='page_text'>Top courses </p>
        <a  href ="https://instagram.com/aurora.light.studio?igshid=MzRlODBiNWFlZA==" className='footer_links'> <p>IIT -JEE</p></a>
        <a href="https://www.facebook.com/profile.php?id=100090555109807&mibextid=ZbWKwL" className='footer_links'> <p>NEET - MEDICAL</p></a>
        <a  href="https://www.amazon.in/s?i=merchant-items&me=A3RH6WK6BZKY5N&srs=27943762031&fs=true&ref=lp_27943762031_sar" className='footer_links'> <p>Foundation courses</p></a>
        <a  href="https://www.amazon.in/s?i=merchant-items&me=A3RH6WK6BZKY5N&srs=27943762031&fs=true&ref=lp_27943762031_sar" className='footer_links'> <p>Smart champ</p></a>
        </ul>
 </wrapper>

 <wrapper className="footer_wrapper2">
        <ul>
        <p className='page_text'>Exam Preparation </p>
        <a  href ="https://instagram.com/aurora.light.studio?igshid=MzRlODBiNWFlZA==" className='footer_links'> <p>IIT -JEE</p></a>
        <a href="https://www.facebook.com/profile.php?id=100090555109807&mibextid=ZbWKwL" className='footer_links'> <p>NEET - MEDICAL</p></a>
        <a  href="https://www.amazon.in/s?i=merchant-items&me=A3RH6WK6BZKY5N&srs=27943762031&fs=true&ref=lp_27943762031_sar" className='footer_links'> <p>Foundation courses</p></a>
        <a  href="https://www.amazon.in/s?i=merchant-items&me=A3RH6WK6BZKY5N&srs=27943762031&fs=true&ref=lp_27943762031_sar" className='footer_links'> <p>Smart champ</p></a>
        </ul>
 </wrapper>
</Container>
   </Container>
{/*-------------------------------------------------------*/}

<Container fluid  className='footer_container_fluid_sm'>
<Container className='footer_content_container_sm'>
{/* <img className='footer_brand' src={require("../../assets/Alogo1.png")}alt=""/> */}
    <wrapper className="footer_wrapper1">
<p>Hanging lights are popular indoor and outdoor lighting options that add serenity to any space. Add a touch of glamour to your home with our customised lighting options.
Subscribe for new product and sale updates.
</p>
</wrapper>

 <wrapper className="footer_wrapper2_sm">
      <div>
      <ul >
          <p>category </p>
          <a href="#SomeNew" className='footer_links'>  <p> gold</p></a>
          <a href="#SomeNew" className='footer_links'> <p> black</p></a>
          <a href="#SomeNew" className='footer_links'> <p> Pastel</p></a>
        </ul>
        </div>

        <div>
        <ul>
        <p>Social </p>
        <a  href ="https://instagram.com/aurora.light.studio?igshid=MzRlODBiNWFlZA==" className='footer_links'> <p>instagram</p></a>
        <a href="https://www.facebook.com/profile.php?id=100090555109807&mibextid=ZbWKwL" className='footer_links'> <p>facebook</p></a>
        <a  href="https://www.amazon.in/s?i=merchant-items&me=A3RH6WK6BZKY5N&srs=27943762031&fs=true&ref=lp_27943762031_sar" className='footer_links'> <p>amazon</p></a>
        </ul>
        </div>
</wrapper>

<div className='news_div' style={{display:"flex", flexDirection:"column", justifyContent:"space-around",alignItems:"start",width:"100%"}}>
<p>newsletter subscription</p>
      <p>subscribe to our newsletter for updates and special offers !</p>
      
      <div className="footer_errorbox">
  <div className="footer_field_group">
  <input
        required
        type="email"
        name="email"
        className="footer_form_fields"
        value={formData.email}
        onChange={handleChange}
      />
      <label className="footer_form_labels" htmlFor="fnameInput">
        Email
      </label>
    <button onClick={handleButtonClick} className="custom-button">Subscribe</button>
    </div>

  <div style={{marginLeft:"5px"}}>{errors.email && <p className="error">{errors.email}</p>}</div>
</div>
     </div>
      

<p className='mt-2'  style={{fontSize:"11px"}}> &copy; 2023 JM Education . All Rights Reserved</p>
</Container>
   </Container>
   </>
  )
}

export default Footer


// import React,{useState} from 'react'
// import { Container } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import { SiMailgun } from 'react-icons/si';
// import "./Footer.css"

// const Footer = () => {

    // const [formData, setFormData] = useState({ email: '' });
    // const [errors, setErrors] = useState({ email: '' });
  
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData({
    //     ...formData,
    //     [name]: value,
    //   });
  
    //   // Validation logic for the email field (you can modify this to suit your requirements)
    //   if (name === 'email') {
    //     if (!value) {
    //       setErrors({
    //         ...errors,
    //         email: 'Email is required',
    //       });
    //     } else if (!isValidEmail(value)) {
    //       setErrors({
    //         ...errors,
    //         email: 'Invalid email format',
    //       });
    //     } else {
    //       setErrors({
    //         ...errors,
    //         email: '',
    //       });
    //     }
    //   }
    // };
    // const handleButtonClick = () => {
   
    // setFormData({ email: '' });
    // };
    // const isValidEmail = (email) => {
    //   const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    //   return emailPattern.test(email);
    // };  
//   return (
//     <Container fluid style={{background:"#000"}}>
//       <Container className='footer_content_container'>
// <wrapper className="wrapper_img_text">
//       <img className='footer__brand ' src={require("../../assets/Alogo.png")}alt= ""/>
//        <p>Hanging lights are popular indoor and outdoor lighting options that add serenity to any space. Add a touch of glamour to your home with our customised lighting options.
// Subscribe for new product and sale updates.
//  </p>
//  <p style={{fontSize:"10px",}}>All rights reserved 2023 reclamehub |marketing agency</p>
//     </wrapper>

// <div className='d-flex justify-content-between align-items-center divs_Of_link'>
// <wrapper className="link_wrapper">
//             <ul>
//               <p className='links_heading'>category</p>
//               <a href="#SomeNew" className='links'><li> gold</li></a>
//               <a href="#SomeNew" className='links'><li> black</li></a>
//               <a href="#SomeNew" className='links'><li> pastel</li></a>
//             </ul>
//           </wrapper>

//     <wrapper className="link_wrapper">
//       <ul>
//        <p className='links_heading'>social</p>
//        <a  href ="https://instagram.com/aurora.light.studio?igshid=MzRlODBiNWFlZA=="className='links'><li>instagram</li></a> 
//        <a href="https://www.facebook.com/profile.php?id=100090555109807&mibextid=ZbWKwL"className='links'><li>facebook</li></a> 
//        <a href="https://www.amazon.in/s?i=merchant-items&me=A3RH6WK6BZKY5N&srs=27943762031&fs=true&ref=lp_27943762031_sar"className='links'><li>amazon</li></a> 
//       </ul>
//     </wrapper>
//     </div>

//     <wrappper className="subscribe_wrapper">
//       <p>newsletter subscription</p>
//       <p>subscribe to our newsletter for updates and special offers !</p>
      
//       <div className="footer_errorbox">
//   <div className="footer_field_group">
//   <input
//         required
//         type="email"
//         name="email"
//         className="footer_form_fields"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <label className="footer_form_labels" htmlFor="fnameInput">
//         Email
//       </label>
//     <button onClick={handleButtonClick} className="custom-button">Subscribe</button>
//     </div>

//   <div style={{marginLeft:"5px"}}>{errors.email && <p className="error">{errors.email}</p>}</div>
// </div>
//     </wrappper>
//     </Container>
//     </Container>
//   )
// }

// export default Footer