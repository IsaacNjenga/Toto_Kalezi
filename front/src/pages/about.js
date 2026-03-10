import { Link } from "react-router-dom";
import { FloatButton, Row, Col } from "antd";
import { ArrowRightOutlined, TeamOutlined } from "@ant-design/icons";
import image2 from "../assets/images/gallery_images/12.jpeg";
import image3 from "../assets/images/gallery_images/15.jpeg";
import image4 from "../assets/images/gallery_images/19.jpeg";
import IconMotion from "../components/motion";
import heroBg from "../assets/images/gallery_images/18.jpeg";
import { useUser } from "../contexts/UserContext";
import { focusAreas, impactStats, values } from "../assets/data/data";

// ── Tokens ──────────────────────────────────────────────────────
const primary = "#854a9a";
const primaryDim = "rgba(133,74,154,0.1)";
const primaryMid = "rgba(133,74,154,0.22)";
const primaryGlow = "rgba(133,74,154,0.4)";
const dark = "#0a080e";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');

  @keyframes heroFadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity:0; } to { opacity:1; }
  }

  .about-section-card:hover {
    box-shadow: 0 12px 40px ${primaryGlow} !important;
    border-color: ${primaryMid} !important;
  }
  .about-img:hover { transform: scale(1.04) !important; }
  .value-card:hover {
    background: ${primaryDim} !important;
    border-color: ${primaryMid} !important;
    transform: translateY(-3px) !important;
  }
  .impact-stat:hover {
    background: ${primaryDim} !important;
    border-color: ${primary} !important;
    transform: translateY(-2px) !important;
  }
  .focus-item:hover {
    background: ${primaryDim} !important;
    border-color: ${primaryMid} !important;
  }
  .donate-cta-btn:hover {
    background: #6a3a7e !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 24px ${primaryGlow} !important;
  }
  .about-hero-bg {
    background-image: url(/src/assets/images/gallery_images/18.jpeg);
  }
`;

// ── Small components ─────────────────────────────────────────────
function SectionTag({ children }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "'Outfit', sans-serif",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: primary,
        background: primaryDim,
        border: `1px solid ${primaryMid}`,
        borderRadius: 20,
        padding: "4px 14px",
        marginBottom: 14,
      }}
    >
      {children}
    </span>
  );
}

function SectionTitle({ children }) {
  return (
    <h2
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "2rem",
        fontWeight: 700,
        color: "#1a1a1a",
        margin: "0 0 6px",
        letterSpacing: "0.02em",
      }}
    >
      {children}
    </h2>
  );
}

function Divider() {
  return (
    <div
      style={{
        width: 44,
        height: 3,
        background: `linear-gradient(90deg, ${primary}, #a066bc)`,
        borderRadius: 2,
        margin: "0 0 20px",
      }}
    />
  );
}

function SectionCard({ children, style = {} }) {
  return (
    <div
      className="about-section-card"
      style={{
        background: "#fff",
        borderRadius: 16,
        border: `1px solid rgba(133,74,154,0.08)`,
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        padding: "40px 44px",
        marginBottom: 28,
        transition: "all 0.3s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────────
function About() {
  const { isMobile } = useUser();

  return (
    <>
      <style>{globalStyles}</style>
      <IconMotion>
        <>
          <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
            <FloatButton.BackTop visibilityHeight={0} title="Back to top" />
          </FloatButton.Group>
        </>

        <div style={{ background: "#f5f3f7", minHeight: "100vh" }}>
          {/* ── HERO ──────────────────────────────────────────── */}
          <div
            className="about-hero-bg"
            style={{
              position: "relative",
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingTop: 180,
              paddingBottom: 140,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(160deg, rgba(10, 5, 15, 0.29) 0%, rgba(60, 20, 80, 0.19) 50%, rgba(10, 5, 15, 0.58) 100%)`,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 110,
                background: "linear-gradient(to bottom, transparent, #f5f3f7)",
              }}
            />
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
                textAlign: "center",
                animation: "heroFadeUp 0.9s ease both",
                padding: "0 24px",
              }}
            >
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: isMobile ? "2.2rem" : "3.2rem",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 16px",
                  letterSpacing: "0.04em",
                  textShadow: "0 2px 24px rgba(0,0,0,0.4)",
                  lineHeight: 1.2,
                }}
              >
                About Us
              </h1>

              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: isMobile ? "1.1rem" : "1.4rem",
                  color: "rgba(255,255,255,0.72)",
                  margin: 0,
                  letterSpacing: "0.03em",
                }}
              >
                To Destiny With Hope
              </p>
            </div>
          </div>

          {/* ── PAGE BODY ─────────────────────────────────────── */}
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: isMobile ? "24px 16px 64px" : "32px 40px 80px",
            }}
          >
            {/* ── INTRO ── */}
            <SectionCard
              style={{
                textAlign: "center",
                padding: isMobile ? "32px 24px" : "52px 80px",
              }}
            >
              <SectionTag>Who We Are</SectionTag>
              <SectionTitle>Welcome to Toto Kalezi Foundation</SectionTitle>
              <Divider />
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: isMobile ? "1rem" : "1.1rem",
                  color: "#555",
                  lineHeight: 1.9,
                  maxWidth: 740,
                  margin: "0 auto",
                }}
              >
                We are a non-governmental and non-profit organization dedicated
                to empowering the lives of street children and vulnerable
                communities. With unwavering commitment and compassion, we
                strive to bring hope, transformation, and lasting change to
                those who need it most.
              </p>
            </SectionCard>

            {/* ── MISSION ── */}
            <SectionCard>
              <Row gutter={[40, 32]} align="middle">
                <Col xs={24} md={12}>
                  <SectionTag>Our Mission</SectionTag>
                  <SectionTitle>What We Strive For</SectionTitle>
                  <Divider />
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.97rem",
                      color: "#555",
                      lineHeight: 1.9,
                      marginBottom: 24,
                    }}
                  >
                    Our mission is to provide street children, the sick,
                    orphans, elderly, and disabled individuals with the support
                    and resources they need to lead better lives — through
                    healthy meals, empowering education, quality healthcare, and
                    adequate shelter.
                  </p>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: primary,
                      marginBottom: 14,
                    }}
                  >
                    Our Focus Areas
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {focusAreas.map(({ icon, label, desc }) => (
                      <div
                        key={label}
                        className="focus-item"
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 14,
                          padding: "12px 16px",
                          borderRadius: 10,
                          border: "1px solid rgba(133,74,154,0.1)",
                          background: "rgba(133,74,154,0.04)",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <span
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            background: primaryDim,
                            border: `1px solid ${primaryMid}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: primary,
                            fontSize: 14,
                            flexShrink: 0,
                          }}
                        >
                          {icon}
                        </span>
                        <div>
                          <p
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "0.88rem",
                              fontWeight: 700,
                              color: "#1a1a1a",
                              margin: "0 0 2px",
                            }}
                          >
                            {label}
                          </p>
                          <p
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "0.83rem",
                              color: "#777",
                              margin: 0,
                              lineHeight: 1.6,
                            }}
                          >
                            {desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div
                    style={{
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: `0 8px 32px ${primaryGlow}`,
                    }}
                  >
                    <img
                      src={image2}
                      alt="Our Mission"
                      className="about-img"
                      style={{
                        width: "100%",
                        height: isMobile ? 260 : 420,
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </SectionCard>

            {/* ── VISION ── */}
            <SectionCard>
              <Row gutter={[40, 32]} align="middle">
                {!isMobile && (
                  <Col xs={24} md={12}>
                    <div
                      style={{
                        borderRadius: 14,
                        overflow: "hidden",
                        boxShadow: `0 8px 32px ${primaryGlow}`,
                      }}
                    >
                      <img
                        src={image3}
                        alt="Our Vision"
                        className="about-img"
                        style={{
                          width: "100%",
                          height: 380,
                          objectFit: "cover",
                          display: "block",
                          transition: "transform 0.4s ease",
                        }}
                      />
                    </div>
                  </Col>
                )}
                <Col xs={24} md={12}>
                  <SectionTag>Our Vision</SectionTag>
                  <SectionTitle>The Future We Envision</SectionTitle>
                  <Divider />
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.97rem",
                      color: "#555",
                      lineHeight: 1.9,
                    }}
                  >
                    We envision a future where every vulnerable individual has
                    access to basic needs and opportunities for growth —
                    enabling them to become active participants in their
                    communities and live dignified, fulfilling lives.
                  </p>
                  <div
                    style={{
                      marginTop: 24,
                      padding: "18px 22px",
                      borderRadius: 10,
                      background: primaryDim,
                      border: `1px solid ${primaryMid}`,
                      borderLeft: `4px solid ${primary}`,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic",
                        fontSize: "1.1rem",
                        color: primary,
                        margin: 0,
                        lineHeight: 1.7,
                      }}
                    >
                      "A compassionate and inclusive society for all — where
                      hope transforms into destiny."
                    </p>
                  </div>
                </Col>
                {isMobile && (
                  <Col xs={24}>
                    <div
                      style={{
                        borderRadius: 14,
                        overflow: "hidden",
                        boxShadow: `0 8px 32px ${primaryGlow}`,
                      }}
                    >
                      <img
                        src={image3}
                        alt="Our Vision"
                        className="about-img"
                        style={{
                          width: "100%",
                          height: 240,
                          objectFit: "cover",
                          display: "block",
                          transition: "transform 0.4s ease",
                        }}
                      />
                    </div>
                  </Col>
                )}
              </Row>
            </SectionCard>

            {/* ── VALUES ── */}
            <SectionCard style={{ textAlign: "center" }}>
              <SectionTag>What Drives Us</SectionTag>
              <SectionTitle>Our Core Values</SectionTitle>
              <Divider />
              <Row gutter={[20, 20]} style={{ marginTop: 8 }}>
                {values.map(({ icon, label, desc }) => (
                  <Col key={label} xs={24} sm={12} md={6}>
                    <div
                      className="value-card"
                      style={{
                        padding: "28px 20px",
                        borderRadius: 12,
                        border: "1px solid rgba(133,74,154,0.1)",
                        background: "rgba(133,74,154,0.03)",
                        height: "100%",
                        transition: "all 0.25s ease",
                        cursor: "default",
                      }}
                    >
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                          background: primaryDim,
                          border: `1px solid ${primaryMid}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: primary,
                          fontSize: 20,
                          margin: "0 auto 16px",
                        }}
                      >
                        {icon}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "#1a1a1a",
                          margin: "0 0 8px",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {label}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.85rem",
                          color: "#777",
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {desc}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </SectionCard>

            {/* ── IMPACT ── */}
            <SectionCard>
              <Row gutter={[40, 32]} align="middle">
                <Col xs={24} md={13}>
                  <SectionTag>Our Impact</SectionTag>
                  <SectionTitle>Lives Changed, Stories Written</SectionTitle>
                  <Divider />
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.97rem",
                      color: "#555",
                      lineHeight: 1.9,
                      marginBottom: 28,
                    }}
                  >
                    Over the years, Toto Kalezi Foundation has transformed
                    thousands of lives through our programs — and we remain
                    committed to creating a brighter future for all.
                  </p>
                  <Row gutter={[14, 14]}>
                    {impactStats.map(({ value, label }) => (
                      <Col key={label} xs={12} sm={8}>
                        <div
                          className="impact-stat"
                          style={{
                            padding: "18px 14px",
                            borderRadius: 10,
                            border: "1px solid rgba(133,74,154,0.12)",
                            background: "rgba(133,74,154,0.04)",
                            textAlign: "center",
                            transition: "all 0.25s ease",
                            cursor: "default",
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "1.7rem",
                              fontWeight: 700,
                              color: primary,
                              lineHeight: 1,
                              marginBottom: 6,
                            }}
                          >
                            {value}
                          </div>
                          <div
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "0.78rem",
                              fontWeight: 500,
                              color: "#888",
                              letterSpacing: "0.04em",
                              textTransform: "uppercase",
                            }}
                          >
                            {label}
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col xs={24} md={11}>
                  <div
                    style={{
                      borderRadius: 14,
                      overflow: "hidden",
                      boxShadow: `0 8px 32px ${primaryGlow}`,
                    }}
                  >
                    <img
                      src={image4}
                      alt="Our Impact"
                      className="about-img"
                      style={{
                        width: "100%",
                        height: isMobile ? 240 : 400,
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </SectionCard>

            {/* ── GET INVOLVED ── */}
            <div
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                background: dark,
                padding: isMobile ? "48px 28px" : "64px 80px",
                textAlign: "center",
              }}
            >
              {/* Background glow */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 500,
                  height: 300,
                  background: primaryGlow,
                  borderRadius: "50%",
                  filter: "blur(80px)",
                  opacity: 0.35,
                  pointerEvents: "none",
                }}
              />
              {/* Top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "15%",
                  right: "15%",
                  height: 3,
                  background: `linear-gradient(90deg, transparent, ${primary}, #a066bc, transparent)`,
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <SectionTag>Get Involved</SectionTag>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: isMobile ? "1.9rem" : "2.6rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "8px 0 16px",
                    letterSpacing: "0.02em",
                    lineHeight: 1.3,
                  }}
                >
                  How You Can Help
                </h2>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.6)",
                    maxWidth: 540,
                    margin: "0 auto 32px",
                    lineHeight: 1.8,
                  }}
                >
                  Whether through donations, volunteering, or spreading
                  awareness — every contribution makes a tangible difference in
                  the lives of those we serve.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 14,
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    to="/donate"
                    className="donate-cta-btn"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#fff",
                      background: `linear-gradient(135deg, ${primary} 0%, #a066bc 100%)`,
                      borderRadius: 8,
                      padding: "14px 32px",
                      textDecoration: "none",
                      boxShadow: `0 4px 20px ${primaryGlow}`,
                      transition: "all 0.25s ease",
                    }}
                  >
                    Donate Now <ArrowRightOutlined />
                  </Link>
                  <Link
                    to="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.8)",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      borderRadius: 8,
                      padding: "14px 32px",
                      textDecoration: "none",
                      backdropFilter: "blur(6px)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    Volunteer <TeamOutlined />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IconMotion>
    </>
  );
}

export default About;
