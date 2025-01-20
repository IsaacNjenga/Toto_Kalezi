import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/donate.css"; // Link to the CSS file

function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your generous donation!");
  };

  return (
    <>
      <div className="donate-page-container">
        <div className="donate-page-image">
          <div className="navbar-element">
            <Navbar />
          </div>
          <div className="donate-page-content">
            <div className="donate-page-header"></div>
          </div>
        </div>
        <div className="donate-page">
          <section className="donate-intro">
            <h1>Make a Difference Today</h1>
            <p>
              Your contribution can bring hope, shelter, education, and
              healthcare to those who need it most. Every donation, big or
              small, helps us fulfill our mission to support vulnerable
              children, the elderly, and disabled individuals in our community.
            </p>
          </section>

          <section className="donate-form">
            <h2>Donate Here</h2>
            <p>
              Your support allows us to continue our work and expand our reach
              to those who need it most. Fill out the form below and help us
              bring lasting change.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="amount">Donation Amount (KES)</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-submit">
                <button type="submit" className="donate-form-btn">
                  Donate
                </button>
              </div>
            </form>
          </section>

          <section className="donate-footer">
            <p>
              <i>
                Your generosity is the key to bringing hope to those who need it
                most. Thank you for partnering with us to create lasting change.
              </i>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Donate;
