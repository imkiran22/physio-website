import React from 'react';
import Contact from '../components/Contact/Contact';

const ContactUsPage = ({className = ''}) => {
  return <div className={`bookAppointment ${className}`}><Contact/></div>
}

export default ContactUsPage;