import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import Footer from "../footer/Footer";
import "./Contact.css";


const Contact = () => {
  return (
    <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="contact_container">
      <span className="contact_container-icon"><MdOutlineEmail /></span>
      <h2 >Email</h2>
      <h4>tamujyoti123@gmail.com</h4>
      <a href="mailto:tamujyoti123@gmail.com" target="_blank">Send a message</a>
    </div>
    <Footer />
   </section>
  )
}

export default Contact;
