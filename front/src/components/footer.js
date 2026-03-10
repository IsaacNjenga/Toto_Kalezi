import React, { useState } from "react";
import logo from "../assets/images/new_logo3.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import footerbg from "../assets/images/footer-bg.jpeg";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faMobile,
  faPhone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { gallery_images } from "../assets/data/data";
import { Link } from "react-router-dom";

const primary = "#854a9a";
const primaryGlow = "rgba(133,74,154,0.4)";

const pseudoStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

  .footer-social-icon:hover {
    background: ${primary} !important;
    border-color: ${primary} !important;
    color: #fff !important;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px ${primaryGlow} !important;
  }
  .footer-gallery-img:hover {
    transform: scale(1.06);
    filter: brightness(1.1);
    outline: 2px solid ${primary};
  }
  .footer-contact-row:hover .footer-contact-icon {
    color: ${primary} !important;
  }
  .footer-view-more:hover {
    background: ${primary} !important;
    color: #fff !important;
    border-color: ${primary} !important;
    letter-spacing: 0.12em;
  }
  .footer-modal-close:hover {
    background: ${primary} !important;
    color: #fff !important;
  }
`;

function FooterContent() {
  const [openImage, setOpenImage] = useState(null);

  const viewImage = (id) => {
    const selected = gallery_images.find((g) => g.id === id);
    if (selected) setOpenImage(selected.image);
  };

  const closeImage = () => setOpenImage(null);

  const socials = [
    {
      icon: faYoutube,
      url: "https://www.youtube.com/@elder-evmiriamwairimu-aris6453",
      label: "YouTube",
    },
    {
      icon: faFacebook,
      url: "https://web.facebook.com/totokalezifoundation/?_rdc=1&_rdr#",
      label: "Facebook",
    },
    {
      icon: faXTwitter,
      url: "https://x.com/totokalezi?s=11",
      label: "X",
    },
  ];

  const contacts = [
    { icon: faPhone, text: "+254-768-969772" },
    { icon: faMobile, text: "+254-787-685667" },
    {
      icon: faEnvelope,
      text: "totokalezifoundation20@gmail.com",
      href: "mailto:totokalezifoundation20@gmail.com",
    },
    {
      icon: faLocationDot,
      text: "Mutonya, Eastern Bypass, Ruiru, Kiambu, Kenya",
    },
  ];

  return (
    <>
      <style>{pseudoStyles}</style>
      <footer
        style={{ fontFamily: "'Outfit', sans-serif", position: "relative" }}
      >
        {/* ── Background ── */}
        <div style={{ position: "relative", overflow: "hidden",margin:0,padding:0 }}>
          <img
            src={footerbg}
            alt="background"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.12) saturate(0.6)",
            }}
          />

          {/* Purple gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(160deg, rgba(10,8,14,0.97) 0%, rgba(40,18,52,0.95) 50%, rgba(10,8,14,0.97) 100%)`,
            }}
          />

          {/* Top accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: `linear-gradient(90deg, transparent 0%, ${primary} 40%, #a066bc 60%, transparent 100%)`,
            }}
          />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* ── Logo + Tagline ── */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "56px 32px 40px",
                borderBottom: `1px solid rgba(133,74,154,0.15)`,
                textAlign: "center",
              }}
            >
              <img
                src={logo}
                alt="Toto Kalezi Foundation"
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 16,
                  objectFit: "cover",
                  border: `2px solid rgba(133,74,154,0.35)`,
                  boxShadow: `0 0 32px rgba(133,74,154,0.25)`,
                  marginBottom: 20,
                }}
              />
              <h2
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: 22,
                  color: "#fff",
                  letterSpacing: "0.06em",
                  margin: "0 0 8px",
                  textTransform: "uppercase",
                }}
              >
                Toto Kalezi Foundation
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 13,
                  letterSpacing: "0.05em",
                  margin: 0,
                  maxWidth: 360,
                }}
              >
                Empowering the communities across Kenya
              </p>
            </div>

            {/* ── Four Columns ── */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "0",
                padding: "0 0 0",
              }}
            >
              {/* About */}
              <div
                style={{
                  padding: "40px 32px",
                  borderRight: "1px solid rgba(133,74,154,0.1)",
                }}
              >
                <SectionHeading>About Us</SectionHeading>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: 13.5,
                    lineHeight: 1.9,
                    margin: 0,
                  }}
                >
                  We are a non-governmental, non-profit organization dedicated
                  to empowering the lives of street children and vulnerable
                  communities — bringing hope, transformation, and lasting
                  change to those who need it most.
                </p>
              </div>

              {/* Contacts */}
              <div
                style={{
                  padding: "40px 32px",
                  borderRight: "1px solid rgba(133,74,154,0.1)",
                }}
              >
                <SectionHeading>Contacts</SectionHeading>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 14 }}
                >
                  {contacts.map(({ icon, text, href }, i) => (
                    <div
                      key={i}
                      className="footer-contact-row"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        cursor: "default",
                      }}
                    >
                      <span
                        className="footer-contact-icon"
                        style={{
                          color: "rgba(133,74,154,0.7)",
                          fontSize: 14,
                          marginTop: 2,
                          minWidth: 16,
                          transition: "color 0.2s",
                        }}
                      >
                        <FontAwesomeIcon icon={icon} />
                      </span>
                      {href ? (
                        <a
                          href={href}
                          style={{
                            color: "rgba(255,255,255,0.55)",
                            fontSize: 13,
                            textDecoration: "none",
                            lineHeight: 1.6,
                          }}
                        >
                          {text}
                        </a>
                      ) : (
                        <span
                          style={{
                            color: "rgba(255,255,255,0.55)",
                            fontSize: 13,
                            lineHeight: 1.6,
                          }}
                        >
                          {text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div
                style={{
                  padding: "40px 32px",
                  borderRight: "1px solid rgba(133,74,154,0.1)",
                }}
              >
                <SectionHeading>Follow Us</SectionHeading>
                <p
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: 13,
                    marginBottom: 20,
                  }}
                >
                  Stay connected through our social channels.
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  {socials.map(({ icon, url, label }) => (
                    <div
                      key={label}
                      className="footer-social-icon"
                      onClick={() => window.open(url)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "11px 16px",
                        borderRadius: 8,
                        border: `1px solid rgba(133,74,154,0.22)`,
                        background: "rgba(133,74,154,0.06)",
                        color: "rgba(255,255,255,0.65)",
                        fontSize: 14,
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={icon}
                        style={{ fontSize: 16, width: 18 }}
                      />
                      <span
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 13,
                          fontWeight: 500,
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div style={{ padding: "40px 32px" }}>
                <SectionHeading>Gallery</SectionHeading>
                <p
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: 13,
                    marginBottom: 16,
                  }}
                >
                  Our work at a glance
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 6,
                    marginBottom: 16,
                  }}
                >
                  {gallery_images.slice(0, 6).map((g) => (
                    <img
                      key={g.id}
                      src={g.image}
                      alt={g.id}
                      className="footer-gallery-img"
                      onClick={() => viewImage(g.id)}
                      style={{
                        width: "100%",
                        aspectRatio: "1",
                        objectFit: "cover",
                        borderRadius: 6,
                        cursor: "pointer",
                        transition:
                          "transform 0.25s ease, filter 0.25s ease, outline 0.2s ease",
                        outline: "2px solid transparent",
                      }}
                    />
                  ))}
                </div>
                <Link
                  to="/gallery"
                  className="footer-view-more"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "9px 18px",
                    borderRadius: 6,
                    border: `1px solid rgba(133,74,154,0.35)`,
                    background: "transparent",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                >
                  View More <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>

            {/* ── Bottom Bar ── */}
            <div
              style={{
                borderTop: `1px solid rgba(133,74,154,0.12)`,
                padding: "20px 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.22)",
                  fontSize: 12,
                  margin: 0,
                  letterSpacing: "0.03em",
                }}
              >
                © {new Date().getFullYear()} Toto Kalezi Foundation. All rights
                reserved.
              </p>
              <p
                style={{
                  color: "rgba(133,74,154,0.5)",
                  fontSize: 12,
                  margin: 0,
                  letterSpacing: "0.03em",
                }}
              >
                Empowering communities · Ruiru, Kenya
              </p>
            </div>
          </div>
        </div>

        {/* ── Image Modal ── */}
        {openImage && (
          <div
            onClick={closeImage}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(5,3,10,0.92)",
              backdropFilter: "blur(12px)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              className="footer-modal-close"
              onClick={closeImage}
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                width: 40,
                height: 40,
                border: `1px solid rgba(133,74,154,0.4)`,
                borderRadius: "50%",
                background: "rgba(133,74,154,0.12)",
                color: "rgba(255,255,255,0.7)",
                fontSize: 20,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
                lineHeight: 1,
              }}
            >
              &times;
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "88vh",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: `0 0 60px rgba(133,74,154,0.3), 0 24px 64px rgba(0,0,0,0.7)`,
                border: `1px solid rgba(133,74,154,0.25)`,
              }}
            >
              <img
                src={openImage}
                alt="Gallery view"
                style={{
                  display: "block",
                  maxWidth: "100%",
                  maxHeight: "88vh",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        )}
      </footer>
    </>
  );
}

function SectionHeading({ children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h3
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: primary,
          margin: "0 0 8px",
        }}
      >
        {children}
      </h3>
      <div
        style={{
          width: 28,
          height: 2,
          background: `linear-gradient(90deg, ${primary}, transparent)`,
          borderRadius: 2,
        }}
      />
    </div>
  );
}

export default FooterContent;
