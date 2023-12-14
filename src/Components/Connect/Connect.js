import React, { useState,useRef } from "react";
import { Container } from 'react-bootstrap'
import emailjs from 'emailjs-com';
import {IoPersonOutline} from "react-icons/io5"
import {MdOutlineMailOutline} from "react-icons/md"
import {AiOutlinePhone,AiOutlineMail} from "react-icons/ai"
import Swal from 'sweetalert2';
import "./Connect.css"
import GetIn from "../GetIn/GetIn";

const Connect = (props) => {

    const form = useRef();
    const [formData, setFormData] = useState({
      fname: '',
      mobileNumber: '',
      email: '',
      message: '',
    });
  
    const [errors, setErrors] = useState({});
  
    const onFormSubmit = (formData) => {
      // Define the logic you want to execute when the form is submitted
      console.log("Form submitted:", formData);
      // You can add more logic here if needed
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const validateForm = () => {
      const newErrors = {};
      if (!formData.fname) {
        newErrors.fname = 'Name is required';
      }
      // ... (other validation logic)
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        onFormSubmit(formData);
        emailjs
          .sendForm(
            "service_uhfa1pi",
            "template_45txf4i",
            form.current,
            "AGpC4tXFE36qGchQd"
          )
          .then(
            (result) => {
              console.log(result.text);
              // Use SweetAlert2 for success
              Swal.fire({
                icon: 'success',
                title: 'SUCCESS!',
                text: 'Your message has been sent successfully!',
              }).then(() => {
                setFormData({
                  fname: '',
                  mobileNumber: '',
                  email: '',
                  message: '',
                });
              });
            },
            (error) => {
              console.log(error.text);
              // Use SweetAlert2 for error
              Swal.fire({
                icon: 'error',
                title: 'FAILED...',
                text: 'Something went wrong. Please try again later.',
              });
            }
          );
      }
    };
  

  return (
    <>
<Container fluid className="connect_containerFluid"style={{backgroundColor:"#3C427B"}}>
<Container className="connect_content_container">
<wrapper>
<img className="connect_form_img" src={require("../assets/rectangle5.png")}alt=""/>
</wrapper>
<wrapper className="form_wrapper">
<p className=" form_heading" style={{color:"#fff"}}>{props.connectTitle}</p>
<p className="page_text"> Stay informed and connected with us for updates on government exams at JM Edu Your pathway to success.</p>

<form ref={form} onSubmit={handleSubmit}  className='form '>
     
<div className="input_errorbox">
            <div className="form_group">
              <input
              id=""
                required
                type="text"
                name="fname"
                className="input_fields"
                value={formData.fname}
                onChange={handleChange}
                />
                 {/* <IoPersonOutline
                style={{ height: '20px', width: '17px', order:"2", marginLeft:"-37px",background:"none"}}
                /> */}
                <label className="labels" htmlFor="fnameInput">
                Name
              </label>
             
            </div>
            <div>{errors.fname && <p className="error">{errors.fname}</p>}</div>
          </div>

          <div className="input_errorbox">
            <div className="form_group">
              <input
                required
                type="number"
                name="mobileNumber"
                className="input_fields"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              {/* <AiOutlinePhone  
                style={{ height: "25px", width: "25px", marginLeft: "-37px",  }}
              /> */}
              <label className="labels" htmlFor="fnameInput">
                Mobile Number
              </label>
            </div>
            <div>
              {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
            </div>
          </div>
        
  
        {/*  */}
        <div className="submit_btndiv">
            <button className="submit_btn" type="submit">
              Send Message
            </button>
          </div>
      </form>

          
</wrapper>
</Container>
</Container>

<GetIn/>
</>
  )
}

export default Connect