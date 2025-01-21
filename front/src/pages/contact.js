import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/contact.css"; // Link to the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out to us!");
  };

  return (
    <>
      {" "}
      <div className="contact-container">
        <div className="contact-image">
          <div className="navbar-element">
            <Navbar />
          </div>
          <div className="contact-content">
            <div className="contact-header"></div>
          </div>
        </div>
        <div className="contact-page">
          <section className="contact-header">
            <h1>Contact Us</h1>
            <p>
              We would love to hear from you! Whether you have a question, want
              to get involved, or just want to share your thoughts, reach out to
              us using the form below.
            </p>
          </section>

          <section className="contact-form-info">
            <div className="contact-item">
              <h2>Our Location</h2>
              <p>Kahawa Sukari, Nairobi, Kenya</p>
            </div>
            <div className="contact-item">
              <h2>Phone</h2>
              <p>+254-768-969772</p>
              <p>+254-787-685667</p>
            </div>
            <div className="contact-item">
              <h2>Email</h2>
              <p>
                <a
                  href="mailto: totokalezifoundation20@gmail.com"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  totokalezifoundation20@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-item">
              <h2>Follow Us</h2>
              <div className="social-media">
                <a
                  href="https://web.facebook.com/totokalezifoundation/?_rdc=1&_rdr#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://x.com/totokalezi?s=11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                {/* <a
                  href="https://instagram.com/totokalezi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a> */}
              </div>
            </div>
          </section>

          <section className="contact-form">
            <h2>Get In Touch</h2>
            <p>
              Have a question or want to volunteer? Fill out the form below and
              we will get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <div className="form-submit">
                <button type="submit" className="contact-btn">
                  Send Message
                </button>
              </div>
            </form>
          </section>

          <section className="contact-footer">
            <p>
              Thank you for reaching out to us. Your thoughts and questions are
              important to us, and we look forward to connecting with you.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
