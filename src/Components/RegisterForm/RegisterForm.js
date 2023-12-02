import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./RegisterForm.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    // Validate phone number (simple check for numeric characters)
    const phoneRegex = /^\d+$/;
    if (formData.phone.trim() && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // You can integrate with Email.js here
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
        .then((response) => {
          console.log('Email sent:', response);
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.error('Email failed to send:', error);
        });
    }
  };

  return (
    <div className='reg_form_container'>
      <div className='reg_form_text'>  <p>Unlock premium IIT-JEE/NEET- medical / foundation courses by creating your free account now.</p></div>
      {isSubmitted ? (
      <p >Thank you for submitting the form!</p>
      ) : (
        <form onSubmit={handleSubmit} className='reg_form'>
          <div>
            <label className='reg_label' htmlFor="name">Name</label>
            <input
            className='reg_input_field'
            placeholder='Name'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div>
            <label className='reg_label' htmlFor="email">Email</label>
            <input
            className='reg_input_field'
            placeholder='Email'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div>
            <label className='reg_label' htmlFor="phone">Phone</label>
            <input
            className='reg_input_field'

            placeholder='Mobile No'
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <button className='reg_submitbtn'  type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
