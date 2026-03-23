import React, { useEffect } from "react";
import {
  infoCard,
  team,
  callToAction,
  carouselImages,
} from "../assets/data/data";
import donation from "../assets/icons/donation.png";
import supportUs from "../assets/images/gallery_images/42.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcAmex,
  faCcMastercard,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import volunteerImage from "../assets/images/gallery_images/38.jpeg";
import { Card, Col, FloatButton, Row } from "antd";
import CardMotion from "../components/motion";
import homeBg from "../assets/images/home-bg.jpeg";
import { useUser } from "../contexts/UserContext";
import useFetchWebsite from "../hooks/fetchWebsite";

// ── Design tokens ──────────────────────────────────────────────
const primary = "#854a9a";
const primaryDim = "rgba(133,74,154,0.12)";
const primaryMid = "rgba(133,74,154,0.25)";
const primaryGlow = "rgba(133,74,154,0.45)";
const dark = "#0a080e";

// Only pseudo-elements & keyframes — nothing else
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes subtitleFade {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes scrollContinuous {
    0%   { transform: translateX(0); }
    100% { transform: translateX(calc(-280px * 5)); }
  }

  .info-card:hover {
    transform: translateY(-6px) !important;
    box-shadow: 0 16px 40px ${primaryGlow} !important;
    border-color: ${primary} !important;
  }
  .cta-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 12px 32px ${primaryGlow} !important;
  }
  .team-card:hover {
    transform: translateY(-6px) !important;
    box-shadow: 0 16px 40px rgba(0,0,0,0.18) !important;
  }
  .team-card:hover .team-name {
    color: ${primary} !important;
  }
  .carousel-img:hover {
    transform: scale(1.06) !important;
    box-shadow: 0 8px 24px ${primaryGlow} !important;
  }
  .preset-btn:hover {
    background: #6a3a7e !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 18px ${primaryGlow} !important;
  }
  .donate-now-btn:hover {
    background: #6a3a7e !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 20px ${primaryGlow} !important;
  }
  .volunteer-btn:hover {
    background: #e6b800 !important;
    transform: translateY(-2px) !important;
  }
  .cta-donate-btn:hover {
    background: #6a3a7e !important;
    transform: translateY(-1px) !important;
  }
  .section-label::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 2px;
    background: ${primary};
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 2px;
  }
  .section-label::after {
    content: '';
    display: inline-block;
    width: 28px;
    height: 2px;
    background: ${primary};
    vertical-align: middle;
    margin-left: 10px;
    border-radius: 2px;
  }
  .donate-action-link:hover {
    background: #c0392b !important;
  }
  @media (max-width: 768px) {
    .info-grid { flex-direction: column !important; align-items: center !important; }
    .cta-inner { flex-direction: column !important; }
    .dfsh-col  { border-right: none !important; border-bottom: 1px solid ${primaryMid} !important; }
    .donation-row { flex-direction: column !important; }
    .donation-img { height: 300px !important; }
    .donation-form-box { left: 50% !important; top: 50% !important; width: 88% !important; }
    .team-grid { grid-template-columns: 1fr !important; }
    .final-inner { flex-direction: column !important; padding: 24px 16px !important; }
    .content-row { flex-direction: column !important; padding: 12px !important; }
    .right-col { flex-direction: column !important; align-items: center !important; }
    .hero-title { font-size: 2.4rem !important; }
    .hero-sub   { font-size: 1.1rem !important; }
  }
`;

// ── Small reusable pieces ───────────────────────────────────────
function SectionLabel({ children }) {
  const { isMobile } = useUser();
  return (
    <p
      className="section-label"
      style={{
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 600,
        fontSize: isMobile ? "0.7rem" : "1rem",
        color: "#333",
        textAlign: "center",
        margin: isMobile ? "16px auto 12px" : "32px auto 20px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </p>
  );
}

// ── Main Component ──────────────────────────────────────────────
function Home() {
  const navigate = useNavigate();
  const { isMobile, isImageReady, setIsImageReady } = useUser();
  const { website, loading } = useFetchWebsite();

  const homeHero = website.find((w) => w.pageName === "Home");

  const donationAmounts = [10, 20, 50, 100, 150];

  // Use an effect to track when the specific hero URL is actually loaded
  useEffect(() => {
    if (homeHero?.heroImg) {
      const img = new Image();
      img.src = homeHero.heroImg;
      img.onload = () => setIsImageReady(true);
    }
    // eslint-disable-next-line
  }, [homeHero?.heroImg]);

  return (
    <>
      <style>{globalStyles}</style>
      <CardMotion>
        <>
          <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
            <FloatButton.BackTop visibilityHeight={0} title="Back to top" />
          </FloatButton.Group>
        </>

        <div
          style={{
            position: "relative",
            textAlign: "center",
            background: "#f5f3f7",
          }}
        >
          {/* ── HERO ───────────────────────────────────────────── */}
          <div
            style={{
              position: "relative",
              backgroundImage:
                loading || !homeHero
                  ? `url(${homeBg})`
                  : `url(${homeHero?.heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingTop: 220,
              paddingBottom: 220,
              overflow: "hidden",
              opacity: isImageReady && !loading ? 1 : 0,
            }}
          >
            {/* Dark + purple overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(160deg, rgba(10, 5, 15, 0.29) 0%, rgba(60, 20, 80, 0.19) 50%, rgba(10, 5, 15, 0.22) 100%)`,
              }}
            />
            {/* Bottom fade */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 120,
                background:
                  "linear-gradient(to bottom, transparent, #f5f3f76a)",
              }}
            />{" "}
            {/* Top accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: `linear-gradient(90deg, transparent, ${primary}, #a066bc, transparent)`,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                animation: "heroFadeUp 1s cubic-bezier(0.4,0,0.2,1) both",
              }}
            >
              <h1
                className="hero-title"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "4rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: "0 0 16px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textShadow: "0 2px 24px rgba(0,0,0,0.5)",
                  animation:
                    "heroFadeUp 1s 0.1s cubic-bezier(0.4,0,0.2,1) both",
                }}
              >
                Toto Kalezi
              </h1>

              <h2
                className="hero-sub"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.82)",
                  margin: "0 0 36px",
                  letterSpacing: "0.04em",
                  animation:
                    "heroFadeUp 1s 0.2s cubic-bezier(0.4,0,0.2,1) both",
                }}
              >
                ~ To Destiny With Hope Foundation ~
              </h2>

              <div
                style={{
                  display: "flex",
                  gap: 14,
                  justifyContent: "center",
                  flexWrap: "wrap",
                  animation: "subtitleFade 1s 0.4s both",
                }}
              >
                <button
                  onClick={() => navigate("/donate")}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#fff",
                    background: `linear-gradient(135deg, ${primary} 0%, #a066bc 100%)`,
                    border: "none",
                    borderRadius: 6,
                    padding: "13px 32px",
                    cursor: "pointer",
                    boxShadow: `0 4px 20px ${primaryGlow}`,
                    transition: "all 0.25s ease",
                  }}
                  className="donate-now-btn"
                >
                  Donate
                </button>
                <button
                  onClick={() => navigate("/about")}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 500,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.85)",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 6,
                    padding: "13px 32px",
                    cursor: "pointer",
                    backdropFilter: "blur(6px)",
                    transition: "all 0.25s ease",
                  }}
                >
                  Our Mission
                </button>
              </div>
            </div>
          </div>

          {/* ── INFO CARDS ─────────────────────────────────────── */}
          <SectionLabel>Your contribution goes towards</SectionLabel>
          <div
            className="info-grid"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 20,
              padding: "8px 32px 40px",
            }}
          >
            {infoCard.map((i) => (
              <div
                key={i.id}
                className="info-card"
                style={{
                  flex: "1 1 200px",
                  maxWidth: 240,
                  background: "#fff",
                  borderRadius: 14,
                  border: `1px solid rgba(133,74,154,0.12)`,
                  padding: "28px 20px 24px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                <img
                  src={i.icon}
                  alt={i.title}
                  style={{
                    width: 52,
                    height: 52,
                    objectFit: "contain",
                    marginBottom: 14,
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    margin: "0 0 8px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {i.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.88rem",
                    color: "#666",
                    lineHeight: 1.7,
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  {i.text}
                </p>
              </div>
            ))}
          </div>

          {/* ── CALL TO ACTION ─────────────────────────────────── */}
          <SectionLabel>A helping hand to those who need it</SectionLabel>
          <div style={{ margin: "0 24px 48px" }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile ? "1.4rem" : "2rem",
                fontWeight: 700,
                color: "#1a1a1a",
                margin: "0 0 24px",
                letterSpacing: "0.02em",
              }}
            >
              Each donation is an essential help for everyone's life
            </h2>

            <div
              className="cta-inner"
              style={{
                display: "flex",
                gap: 0,
                borderRadius: 16,
                overflow: "hidden",
                background: primaryDim,
                border: `1px solid ${primaryMid}`,
              }}
            >
              {/* Cards column */}
              <div
                className="dfsh-col"
                style={{
                  display: "flex",
                  flex: 2,
                  borderRight: `1px solid ${primaryMid}`,
                  flexWrap: "wrap",
                }}
              >
                {callToAction.map((c) => (
                  <div
                    key={c.id}
                    className="cta-card"
                    style={{
                      flex: "1 1 220px",
                      background: "#fff",
                      margin: 12,
                      borderRadius: 12,
                      overflow: "hidden",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                      transition: "all 0.3s ease",
                      textAlign: "left",
                    }}
                  >
                    <img
                      src={c.image}
                      alt={c.title}
                      style={{ width: "100%", height: 260, objectFit: "cover" }}
                    />
                    <div style={{ padding: "16px 18px 20px" }}>
                      <h3
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "#1a1a1a",
                          margin: "0 0 8px",
                        }}
                      >
                        {c.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.88rem",
                          color: "#666",
                          lineHeight: 1.7,
                          margin: "0 0 16px",
                        }}
                      >
                        {c.text}
                      </p>
                      <button
                        className="cta-donate-btn"
                        onClick={() => navigate("/donate")}
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 700,
                          fontSize: 12,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#fff",
                          background: primary,
                          border: "none",
                          borderRadius: 6,
                          padding: "10px 22px",
                          cursor: "pointer",
                          transition: "all 0.22s ease",
                        }}
                      >
                        Donate Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Volunteer panel */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  minHeight: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={volunteerImage}
                  alt="Volunteer"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "blur(1px) brightness(0.45)",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    padding: "32px 24px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "#fff",
                      margin: "0 0 6px",
                      textShadow: "0 2px 12px rgba(0,0,0,0.6)",
                    }}
                  >
                    Become a
                  </p>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                      color: "#ffcc00",
                      margin: "0 0 24px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      textShadow: "0 2px 16px rgba(0,0,0,0.5)",
                    }}
                  >
                    Volunteer
                  </p>
                  <button
                    className="volunteer-btn"
                    onClick={() => navigate("/contact")}
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: dark,
                      background: "#ffcc00",
                      border: "none",
                      borderRadius: 6,
                      padding: "12px 30px",
                      cursor: "pointer",
                      transition: "all 0.22s ease",
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── DONATION FORM ──────────────────────────────────── */}
          <div
            className="donation-row"
            style={{
              position: "relative",
              display: "flex",
              margin: "0 40px 56px",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={supportUs}
              alt="Support us"
              className="donation-img"
              style={{
                width: "100%",
                height: 560,
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(100deg, rgba(30, 10, 40, 0.48) 0%, rgba(10,5,15,0.55) 100%)",
              }}
            />
            {/* Form box */}
            <div
              className="donation-form-box"
              style={{
                position: "absolute",
                top: "50%",
                left: "26%",
                transform: "translate(-50%, -50%)",
                width: isMobile ? 300 : 420,
                background: "rgba(15,10,20,0.75)",
                backdropFilter: "blur(20px)",
                border: `1px solid rgba(133, 74, 154, 0.14)`,
                borderRadius: 16,
                padding: isMobile ? "14px 12px" : "36px 32px",
                boxShadow: `0 8px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(133,74,154,0.1)`,
              }}
            >
              {/* Top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "20%",
                  right: "20%",
                  height: 3,
                  background: `linear-gradient(90deg, transparent, ${primary}, transparent)`,
                  borderRadius: "0 0 4px 4px",
                }}
              />

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 10px",
                  letterSpacing: "0.04em",
                }}
              >
                Support Us
              </h2>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.92rem",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                  margin: "0 0 24px",
                }}
              >
                Every contribution changes lives and inspires future
                generations.
              </p>

              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(133,74,154,0.8)",
                  margin: "0 0 12px",
                }}
              >
                Select Amount
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  justifyContent: "center",
                }}
              >
                {donationAmounts.map((amt) => (
                  <button
                    key={amt}
                    className="preset-btn"
                    onClick={() =>
                      navigate("/donate", { state: { amount: amt } })
                    }
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "#fff",
                      background: primary,
                      border: `1px solid rgba(133,74,154,0.4)`,
                      borderRadius: 8,
                      padding: "11px 22px",
                      cursor: "pointer",
                      transition: "all 0.22s ease",
                      letterSpacing: "0.03em",
                    }}
                  >
                    ${amt}.00
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── TEAM ───────────────────────────────────────────── */}
          <SectionLabel>Our amazing team here to walk with you</SectionLabel>

          <Row
            gutter={[24, 24]}
            style={{
              padding: "8px 40px 48px",
              maxWidth: 1100,
              margin: "0 auto",
            }}
          >
            {team.map((t) => (
              <Col key={t.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  className="team-card"
                  cover={
                    <img
                      src={t.image}
                      alt={t.name}
                      style={{ height: 280, objectFit: "cover" }}
                    />
                  }
                  styles={{
                    body: { padding: "16px 16px 20px" },
                  }}
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    border: "1px solid rgba(133,74,154,0.08)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <h2
                    className="team-name"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: primary,
                      margin: "0 0 4px",
                      transition: "color 0.2s",
                    }}
                  >
                    {t.name}
                  </h2>
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      color: "#555",
                      margin: "0 0 4px",
                    }}
                  >
                    {t.title}
                  </h3>
                  <h4
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 400,
                      color: "#999",
                      margin: 0,
                    }}
                  >
                    {t.location}
                  </h4>
                </Card>
              </Col>
            ))}
          </Row>

          {/* ── CAROUSEL ───────────────────────────────────────── */}
          <SectionLabel>Essential contributions</SectionLabel>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              margin: "8px 40px 48px",
              padding: "28px 0",
              overflow: "hidden",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              border: `1px solid rgba(133,74,154,0.08)`,
            }}
          >
            <div
              style={{
                animation: "scrollContinuous 22s linear infinite",
                display: "flex",
                gap: 14,
              }}
            >
              {[...carouselImages, ...carouselImages].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`carousel-${idx}`}
                  className="carousel-img"
                  style={{
                    width: 280,
                    height: 260,
                    objectFit: "cover",
                    borderRadius: 10,
                    flexShrink: 0,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── FINAL CTA BANNER ───────────────────────────────── */}
          <div style={{ marginBottom: 0 }}>
            <SectionLabel>
              Every small act creates a ripple of change
            </SectionLabel>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                background: dark,
              }}
            >
              {/* BG image */}
              <img
                src={supportUs}
                alt=""
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.18,
                }}
              />
              {/* Gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, rgba(20,8,28,0.96) 0%, rgba(60,20,80,0.85) 100%)`,
                }}
              />

              <div
                className="content-row"
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "64px 80px",
                  gap: 40,
                }}
              >
                {/* Left */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2.4rem",
                      fontWeight: 700,
                      color: "#fff",
                      margin: 0,
                      letterSpacing: "0.04em",
                    }}
                  >
                    Be The Difference!
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "1.05rem",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.8,
                      margin: 0,
                      textAlign: "center",
                      maxWidth: 360,
                    }}
                  >
                    Together, we can transform lives. Your support enables us to
                    provide education, healthcare, and emergency aid to those in
                    need.
                  </p>
                  <div style={{ display: "flex", gap: 14, marginTop: 4 }}>
                    {[faCcVisa, faCcAmex, faCcMastercard].map((icon, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={icon}
                        style={{
                          fontSize: "2.2rem",
                          color: "rgba(255,255,255,0.55)",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    width: 1,
                    alignSelf: "stretch",
                    background: `rgba(133,74,154,0.25)`,
                    flexShrink: 0,
                  }}
                />

                {/* Right */}
                <div
                  className="right-col"
                  style={{
                    flex: 1,
                    display: "flex",
                    gap: 24,
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    src={donation}
                    alt="National Crisis"
                    style={{
                      width: 80,
                      height: 80,
                      objectFit: "contain",
                      flexShrink: 0,
                      filter: "drop-shadow(0 4px 12px rgba(133,74,154,0.5))",
                    }}
                  />
                  <div style={{ textAlign: "left" }}>
                    <h4
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#fff",
                        margin: "0 0 10px",
                      }}
                    >
                      National Crisis
                    </h4>
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.92rem",
                        color: "rgba(255,255,255,0.6)",
                        lineHeight: 1.8,
                        margin: "0 0 18px",
                      }}
                    >
                      Join our mission to provide food, shelter, and hope during
                      times of crisis. Every donation fuels our ability to
                      respond swiftly.
                    </p>
                    <Link
                      to="/donate"
                      className="donate-action-link"
                      style={{
                        display: "inline-block",
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        fontSize: 13,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#fff",
                        background: "#e74c3c",
                        borderRadius: 6,
                        padding: "11px 26px",
                        textDecoration: "none",
                        transition: "background 0.22s ease",
                      }}
                    >
                      Donate
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardMotion>
    </>
  );
}

export default Home;
