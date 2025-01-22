import React, { useState } from "react";
import logo from "../assets/images/toto_kalezi_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import pic1 from "../assets/images/gallery_images/1.jpeg";
import pic2 from "../assets/images/gallery_images/2.jpeg";
import pic3 from "../assets/images/gallery_images/3.jpeg";
import pic4 from "../assets/images/gallery_images/4.jpeg";
import pic5 from "../assets/images/gallery_images/5.jpeg";
import pic6 from "../assets/images/gallery_images/6.jpeg";
import pic7 from "../assets/images/gallery_images/7.jpeg";
import pic8 from "../assets/images/gallery_images/8.jpeg";

import footerbg from "../assets/images/footer-bg.jpeg";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/footer.css";

function Footer() {
  const [openImage, setOpenImage] = useState(null);

  const gallery_images = [
    { id: 1, image: pic1 },
    { id: 2, image: pic2 },
    { id: 3, image: pic3 },
    { id: 4, image: pic4 },
    { id: 5, image: pic5 },
    { id: 6, image: pic6 },
    { id: 7, image: pic7 },
    { id: 8, image: pic8 },
  ];

  const viewImage = (id) => {
    const selectedImage = gallery_images.find((g) => g.id === id);
    if (selectedImage) {
      setOpenImage(selectedImage.image);
    }
  };

  const closeImage = () => {
    setOpenImage(null);
  };

  const toFacebook = () => {
    window.open("https://web.facebook.com/totokalezifoundation/?_rdc=1&_rdr#");
  };

  const toYoutube = () => {};
  const toTwitter = () => {
    window.open("https://x.com/totokalezi?s=11");
  };
  const toInsta = () => {};

  return (
    <footer>
      <div className="footer-background">
        <img src={footerbg} alt="background" className="footer-bg-image" />
        <div className="footer-content">
          <img src={logo} alt="logo" className="footer-logo" />
          <div className="footer-sections">
            <div className="about-us-footer">
              <h2>ABOUT US</h2>
              <p>
                At Toto Kalezi Foundation, we are a non-governmental and
                non-profit organization dedicated to empowering the lives of
                street children and vulnerable communities. With unwavering
                commitment and compassion, we strive to bring hope,
                transformation, and lasting change to those who need it most.
              </p>
            </div>
            <div className="contacts-footer">
              <h2>ALL CONTACTS</h2>
              <p>
                <FontAwesomeIcon icon={faPhone} className="footer-phone-icon" />{" "}
                +254-768-96977
              </p>
              <p>
                <FontAwesomeIcon icon={faMobile} className="footer-mail-icon" />{" "}
                +254-787-685667
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="footer-mail-icon"
                />
                <a
                  href="mailto:
                totokalezifoundation20@gmail.com"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  totokalezifoundation20@gmail.com
                </a>
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="footer-phone-icon"
                />
                Kahawa Sukari, Nairobi, Kenya
              </p>
            </div>
            <div className="socials-footer">
              <h2>SOCIALS</h2>
              <p>Connect with us through our socials.</p>
              <div className="socials-icons">
                <p>
                  <FontAwesomeIcon icon={faYoutube} onClick={toYoutube} />
                </p>
                <p>
                  <FontAwesomeIcon icon={faFacebook} onClick={toFacebook} />
                </p>
                <p>
                  <FontAwesomeIcon icon={faXTwitter} onClick={toTwitter} />
                </p>
                <p>
                  <FontAwesomeIcon icon={faInstagram} onClick={toInsta} />
                </p>
              </div>
            </div>
            <div className="gallery-section">
              <h2>GALLERY</h2>
              <p>Our work at a glance</p>
              <div className="gallery-grid">
                {gallery_images.map((g) => (
                  <img
                    key={g.id}
                    src={g.image}
                    alt={g.id}
                    className="gallery-image"
                    onClick={() => viewImage(g.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {openImage && (
        <div className="image-modal-overlay" onClick={closeImage}>
          {" "}
          <button onClick={closeImage} className="close-footer-modal-btn">
            &times;
          </button>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {" "}
            <div className="image-modal-body">
              <img src={openImage} alt="modal view" className="modal-image" />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
