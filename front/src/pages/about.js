import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
//import image from "../assets/images/footer-bg.jpeg";
import "../assets/css/about.css";
import { Link } from "react-router-dom";
import { Carousel } from "antd";

import image2 from "../assets/images/gallery_images/12.jpeg";
import image3 from "../assets/images/gallery_images/15.jpeg";
import image4 from "../assets/images/gallery_images/19.jpeg";

function About() {
  return (
    <>
      <div className="about-us-container">
        <div className="about-us-image">
          <div className="navbar-element">
            <Navbar />
          </div>
          <div className="about-us-content">
            <div className="about-us-header"></div>
          </div>
        </div>
        <div className="about-page">
          <section className="intro">
            <h1>Welcome to Toto Kalezi Foundation</h1>
            <p>
              At Toto Kalezi Foundation, we are a non-governmental and
              non-profit organization dedicated to empowering the lives of
              street children and vulnerable communities. With unwavering
              commitment and compassion, we strive to bring hope,
              transformation, and lasting change to those who need it most.
            </p>
          </section>

          <section className="mission-vision">
            <div className="section-header">
              <h2>Our Mission</h2>
            </div>
            <div className="mission-content">
              <div className="image-placeholder">
                {" "}
                <img src={image2} alt={`Slide`} />
                {/* <Carousel effect="fade" autoplay autoplaySpeed={2500}>
                  {[image2, image3, image4].map((img) => (
                    <div className="image-placeholder">
                      <img
                        src={img}
                        alt={`Slide`}
                      />
                    </div>
                  ))}
                </Carousel> */}
              </div>
              <p>
                Our mission is to provide street children, the sick, orphans,
                elderly, and disabled individuals with the support and resources
                they need to lead better lives. Through healthy meals,
                empowering education, quality healthcare, and adequate shelter,
                we aim to foster a society that is compassionate and inclusive
                for all.
                <br /> <strong>Our Focus Areas:</strong>{" "}
                <ul>
                  <li>
                    Nourishment: We are committed to feeding the hungry and the
                    impoverished within the community{" "}
                  </li>
                  <li>
                    Education: Empowering individuals with knowledge and skills
                    to break the cycle of poverty
                  </li>
                  <li>
                    Healthcare: Providing access to quality medical care and
                    promoting overall well-being
                  </li>
                  <li>
                    Shelter: Offering safe and secure living environments for
                    those in need
                  </li>
                </ul>
              </p>
            </div>

            <div className="section-header">
              <h2>Our Vision</h2>
            </div>
            <div className="vision-content">
              <p>
                We envision a future where every vulnerable individual has
                access to basic needs and opportunities for growth, enabling
                them to become active participants in their communities and live
                dignified lives.
              </p>
              <div className="image-placeholder">
                <img src={image3} alt="Our Vision" />
              </div>
            </div>
          </section>

          <section className="values">
            <div className="section-header">
              <h2>Our Core Values</h2>
            </div>
            <div className="values-list">
              <ul>
                <li>
                  <strong>Compassion:</strong> We are driven by empathy and the
                  desire to improve lives.
                </li>
                <li>
                  <strong>Integrity:</strong> We are committed to honesty,
                  transparency, and accountability.
                </li>
                <li>
                  <strong>Collaboration:</strong> We believe in working together
                  with other organizations to maximize impact.
                </li>
                <li>
                  <strong>Empowerment:</strong> We work to empower vulnerable
                  individuals to take control of their lives.
                </li>
              </ul>
            </div>
          </section>

          <section className="impact">
            <div className="section-header">
              <h2>Our Impact</h2>
            </div>
            <div className="impact-content">
              {" "}
              <div className="image-placeholder">
                <img src={image4} alt="Our Impact" />
              </div>
              <p>
                Over the years, Toto Kalezi Foundation has transformed the lives
                of many individuals through our various programs. We have
                provided over 500 children with shelter, 300 individuals with
                healthcare services, and 200 families with livelihood support.
                Additionally, we have: <br />
                <ul>
                  <li>
                    Empowered over 1,000 men and women, young boys and girls
                    through education and vocational training
                  </li>
                  <li>Distributed over 10,000 meals to those in need</li>
                  <li>
                    Supported over 100 small businesses and entrepreneurs,
                    creating jobs and stimulating local growth.
                  </li>
                </ul>
                Our work has made a tangible difference in the lives of
                thousands, and we remain committed to creating a brighter future
                for all.
              </p>
            </div>
          </section>

          <section className="get-involved">
            <div className="section-header">
              <h2>How You Can Help</h2>
            </div>
            <div className="get-involved-content">
              <p>
                You can make a difference by supporting our foundation. Whether
                it’s through donations, volunteering, or spreading awareness,
                every contribution counts.
              </p>

              <Link to="/give" className="donate-link-btn">
                Donate Now
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
