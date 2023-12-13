import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import "./GetIn.css" 

const GetIn = () => {
    const [formData, setFormData] = useState({ email: '' });
    const [errors, setErrors] = useState({ email: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  
      // Validation logic for +the email field (you can modify this to suit your requirements)
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
  <Container fluid className='getin_containerFluid' style={{marginBottom:"20px"}}>
<Container className='getin_content_container'>
    <div className='center_heading_div'>
    <p className='page_heading'>get in touch</p>
    <p className='page_text'>Are you ready to embark on a new educational path? Concerned about our programs? Reach out to our staff for individualized help and direction. Engage in dialogue to get started on the path to greatness.</p>
  </div>

  <wrapper className="connectform_wrapper2">

 <div className="connectform_errorbox">
  <div className="connectform_field_group">
  <input
        required
        type="email"
        name="email"
        className="connectform_form_fields"
        value={formData.email}
        onChange={handleChange}
      />
      <label className="connectform_form_labels" htmlFor="fnameInput">
        Email
      </label>
    <button onClick={handleButtonClick} className="custom_button">Subscribe</button>
    </div>

  <div style={{marginLeft:"5px"}}>{errors.email && <p className="error">{errors.email} </p>}</div>
</div>
 </wrapper>
    </Container>
  </Container>
  )
}

export default GetIn