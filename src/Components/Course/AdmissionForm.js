import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './AdmissionForm.css';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    course: '',
    number: '',
    batch: '',
  });

  const [errors, setErrors] = useState({
    fname: '',
    course: '',
    number: '',
    batch: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.fname) {
      newErrors.fname = 'Name is required';
      valid = false;
    }

    if (!formData.course) {
      newErrors.course = 'Course is required';
      valid = false;
    }

    if (!formData.number) {
      newErrors.number = 'Number is required';
      valid = false;
    }

    if (!formData.batch) {
      newErrors.batch = 'Batch is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Send email using Email.js
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID');
      alert('Email sent successfully!');
      setFormData({
        fname: '',
        course: '',
        number: '',
        batch: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <Container className="form_main_container">
      <form onSubmit={handleSubmit} className="admissionform">
       
        <div className="form_wrapper1">
          <div className="form_group">
            <label className='add_labels' htmlFor="name">Enter Your Name</label>
            <input
              className="form_fields"
              type="text"
              name="fname"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
            />
            {errors.fname && <span>{errors.fname}</span>}
          </div>

          <div className="form_group">
            <label className='add_labels' htmlFor="course">Preferred Courses</label>
            <input
              className="form_fields"
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Preferred Courses"
            />
            {errors.course && <span>{errors.course}</span>}
          </div>
        </div>

        <div className="form_wrapper2">
          <div className="form_group">
            <label className='add_labels' htmlFor="number">Enter Your Phone Number</label>
            <input
              className="form_fields"
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Enter Your Phone Number"
            />
            {errors.number && <span>{errors.number}</span>}
          </div>

          <div className="form_group">
            <label className='add_labels' htmlFor="batch">Preferred Batch</label>
            <input
              className="form_fields"
              type="text"
              name="Preferred Batch"
              value={formData.batch}
              onChange={handleChange}
              placeholder="Batch"
            />
            {errors.batch && <span>{errors.batch}</span>}
          </div>
        </div>
<div className='form_btn_div'>
        <button className="course_from_btn"type="submit">send enquiry</button>
        </div>
      </form>
    </Container>
  );
};

export default AdmissionForm;
