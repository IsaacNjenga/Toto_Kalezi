import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/causes.css";
import { FloatButton } from "antd";
function Causes() {
  return (
    <><>
    <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
      <FloatButton.BackTop visibilityHeight={0} title="Back to top" />
    </FloatButton.Group>
  </>
      <Navbar />
      <div className="causes-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-text">
            <h1>Why We Do What We Do</h1>
            <p>
              At Toto Kalezi Foundation, our mission is rooted in the belief
              that everyone deserves a chance to thrive. Through relentless
              effort and unwavering hope, we are dedicated to transforming lives
              and building brighter futures.
            </p>
          </div>
          <div className="hero-image-placeholder">
            {/* Add a hero image here */}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to tackle social injustices, provide critical
              resources to vulnerable communities, and foster opportunities for
              personal and communal growth. We work tirelessly to bridge gaps in
              education, health, and access to essential resources.
            </p>
          </div>
          <div className="mission-image-placeholder">
            {/* Add an image representing your mission here */}
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="why-it-matters-section">
          <h2>Why It Matters</h2>
          <div className="why-it-matters-content">
            <div className="why-text">
              <h3>Impact Beyond Measure</h3>
              <p>
                We believe that small actions can lead to significant change.
                Every drop of support contributes to the sea of impact, touching
                countless lives and empowering communities to thrive.
              </p>
            </div>
            <div className="why-image-placeholder">
              {/* Add an impactful image here */}
            </div>
          </div>
        </section>

        {/* How You Can Help Section */}
        <section className="help-section">
          <h2>How You Can Help</h2>
          <p>
            Whether it's through volunteering, donating, or simply spreading the
            word, your support makes a world of difference. Together, we can
            create a ripple effect of hope and change.
          </p>
          <div className="help-image-placeholder">
            {/* Add an image encouraging support here */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Causes;
