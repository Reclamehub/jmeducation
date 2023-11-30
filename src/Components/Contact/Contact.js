// FormComponent.js
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import "./Contact.css"

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Use EmailJS to send the form data via email
    try {
      await emailjs.send(
        'service_id', // Your EmailJS service ID
        'template_id', // Your EmailJS template ID
        data, // Form data to be sent
        'user_id' // Your EmailJS user ID
      );
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <div className='contact_form_group'>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div className='contact_form_group'>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className='contact_form_group'>
        <label htmlFor="mobile">Mobile Number</label>
        <input
          type="tel"
          id="mobile"
          {...register('mobile', {
            required: 'Mobile number is required',
            pattern: {
              value: /^[0-9]{10}$/i,
              message: 'Invalid mobile number',
            },
          })}
        />
        {errors.mobile && <span>{errors.mobile.message}</span>}
      </div>

      <div className='contact_form_group'>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <span>{errors.message.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
