import React from "react";
import { FloatButton, Form, Input, Button, Row, Col, notification } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SendOutlined,
  UserOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import MobileMotion from "../components/motion/mobileMotion";
import { useUser } from "../contexts/UserContext";
import heroBg from "../assets/images/gallery_images/15.jpeg";

// ── Tokens ───────────────────────────────────────────────────────
const primary = "#854a9a";
const primaryDim = "rgba(133,74,154,0.1)";
const primaryMid = "rgba(133,74,154,0.22)";
const primaryGlow = "rgba(133,74,154,0.4)";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

  @keyframes heroFadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }

  .contact-hero-bg {
    background-image: url(/src/assets/images/gallery_images/15.jpeg);
  }

  /* Ant Design Form overrides */
  .contact-form-wrap .ant-form-item-label > label {
    font-family: 'Outfit', sans-serif !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    letter-spacing: 0.06em !important;
    color: #444 !important;
    text-transform: uppercase !important;
  }
  .contact-form-wrap .ant-input,
  .contact-form-wrap .ant-input-affix-wrapper,
  .contact-form-wrap textarea.ant-input {
    background: #faf8fc !important;
    border: 1px solid rgba(133,74,154,0.2) !important;
    border-radius: 8px !important;
    font-family: 'Outfit', sans-serif !important;
    font-size: 14px !important;
    color: #1a1a1a !important;
    transition: all 0.25s ease !important;
  }
  .contact-form-wrap .ant-input-affix-wrapper {
    padding: 0 14px !important;
  }
  .contact-form-wrap .ant-input-affix-wrapper .ant-input {
    padding: 11px 0 !important;
    border: none !important;
    background: transparent !important;
  }
  .contact-form-wrap .ant-input:focus,
  .contact-form-wrap .ant-input-affix-wrapper-focused {
    border-color: ${primary} !important;
    box-shadow: 0 0 0 3px ${primaryDim} !important;
  }
  .contact-form-wrap .ant-input-prefix {
    color: rgba(133,74,154,0.55) !important;
    margin-right: 10px !important;
  }
  .contact-form-wrap .ant-form-item-explain-error {
    font-family: 'Outfit', sans-serif !important;
    font-size: 12px !important;
  }

  .info-card:hover {
    border-color: ${primaryMid} !important;
    box-shadow: 0 8px 28px ${primaryGlow} !important;
    transform: translateY(-3px) !important;
  }
  .social-link:hover {
    color: ${primary} !important;
    background: ${primaryDim} !important;
    border-color: ${primaryMid} !important;
    transform: translateY(-3px) !important;
  }
  .submit-btn:hover {
    background: #6a3a7e !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 24px ${primaryGlow} !important;
  }
`;

// ── Info card component ──────────────────────────────────────────
function InfoCard({ icon, title, children }) {
  return (
    <div
      className="info-card"
      style={{
        background: "#fff",
        borderRadius: 14,
        border: "1px solid rgba(133,74,154,0.08)",
        boxShadow: "0 2px 14px rgba(0,0,0,0.06)",
        padding: "28px 24px",
        textAlign: "center",
        transition: "all 0.28s ease",
        cursor: "default",
        height: "100%",
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
          fontSize: "0.82rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: primary,
          margin: "0 0 10px",
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────────
function Contact() {
  const { isMobile } = useUser();
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const handleFinish = (values) => {
    console.log(values);
    api.success({
      message: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you as soon as we can.",
      placement: "topRight",
      duration: 5,
    });
    form.resetFields();
  };

  return (
    <>
      {contextHolder}
      <style>{globalStyles}</style>
      <MobileMotion>
        <>
          <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
            <FloatButton.BackTop visibilityHeight={0} title="Back to top" />
          </FloatButton.Group>
        </>

        <div style={{ background: "#f5f3f7", minHeight: "100vh" }}>
          {/* ── HERO ──────────────────────────────────────────── */}
          <div
            className="contact-hero-bg"
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
                background:
                  "linear-gradient(160deg, rgba(10, 5, 15, 0.55) 0%, rgba(50, 15, 65, 0.47) 50%, rgba(10, 5, 15, 0.64) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 110,
                background:
                  "linear-gradient(to bottom, transparent, #f5f3f741)",
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
                  fontSize: isMobile ? "2.4rem" : "3.2rem",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 14px",
                  letterSpacing: "0.04em",
                  lineHeight: 1.2,
                  textShadow: "0 2px 24px rgba(0,0,0,0.4)",
                }}
              >
                Contact Us
              </h1>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: isMobile ? "0.95rem" : "1.05rem",
                  color: "rgba(255,255,255,0.6)",
                  maxWidth: 520,
                  margin: "0 auto",
                  lineHeight: 1.8,
                }}
              >
                We'd love to hear from you — whether you have a question, want
                to get involved, or simply want to share your thoughts.
              </p>
            </div>
          </div>

          {/* ── BODY ──────────────────────────────────────────── */}
          <div
            style={{
              maxWidth: 1060,
              margin: "0 auto",
              padding: isMobile ? "24px 16px 64px" : "32px 0px 80px",
            }}
          >
            {/* ── INFO CARDS ── */}
            <Row gutter={[10, 20]} style={{ marginBottom: 36 }}>
              {/* Location */}
              <Col xs={24} sm={12} lg={6}>
                <InfoCard icon={<EnvironmentOutlined />} title="Our Location">
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.8rem",
                      color: "#555",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    Mutonya, Eastern Bypass
                    <br />
                    Ruiru, Kiambu, Kenya
                  </p>
                </InfoCard>
              </Col>

              {/* Phone */}
              <Col xs={24} sm={12} lg={6}>
                <InfoCard icon={<PhoneOutlined />} title="Phone">
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.8rem",
                      color: "#555",
                      lineHeight: 1.9,
                      margin: 0,
                    }}
                  >
                    +254-768-969772
                    <br />
                    +254-787-685667
                  </p>
                </InfoCard>
              </Col>

              {/* Email */}
              <Col xs={24} sm={12} lg={6}>
                <InfoCard icon={<MailOutlined />} title="Email">
                  <a
                    href="mailto:totokalezifoundation20@gmail.com"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.8rem",
                      color: primary,
                      textDecoration: "none",
                      lineHeight: 1.7,
                      wordBreak: "break-all",
                    }}
                  >
                    totokalezifoundation20@gmail.com
                  </a>
                </InfoCard>
              </Col>

              {/* Socials */}
              <Col xs={24} sm={12} lg={6}>
                <InfoCard icon={<MessageOutlined />} title="Follow Us">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 10,
                      marginTop: 4,
                    }}
                  >
                    {[
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
                      {
                        icon: faYoutube,
                        url: "https://www.youtube.com/@elder-evmiriamwairimu-aris6453",
                        label: "YouTube",
                      },
                    ].map(({ icon, url, label }) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        title={label}
                        style={{
                          width: 40,
                          height: 40,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 10,
                          border: "1px solid rgba(133,74,154,0.15)",
                          color: "rgba(133,74,154,0.7)",
                          fontSize: 18,
                          textDecoration: "none",
                          transition: "all 0.22s ease",
                        }}
                      >
                        <FontAwesomeIcon icon={icon} />
                      </a>
                    ))}
                  </div>
                </InfoCard>
              </Col>
            </Row>

            {/* ── FORM + MAP ROW ── */}
            <Row gutter={[32, 32]} align="top">
              {/* Form */}
              <Col xs={24} lg={14}>
                <div
                  style={{
                    position: "relative",
                    background: "#fff",
                    borderRadius: 20,
                    border: "1px solid rgba(133,74,154,0.1)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                    padding: isMobile ? "32px 24px" : "44px 48px",
                    overflow: "hidden",
                  }}
                >
                  {/* Top accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "10%",
                      right: "10%",
                      height: 3,
                      background: `linear-gradient(90deg, transparent, ${primary}, #a066bc, transparent)`,
                    }}
                  />

                  {/* Heading */}
                  <div style={{ marginBottom: 28 }}>
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
                      Send a Message
                    </span>
                    <h2
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.9rem",
                        fontWeight: 700,
                        color: "#1a1a1a",
                        margin: "0 0 6px",
                      }}
                    >
                      Get In Touch
                    </h2>
                    <div
                      style={{
                        width: 40,
                        height: 3,
                        background: `linear-gradient(90deg, ${primary}, #a066bc)`,
                        borderRadius: 2,
                        marginBottom: 10,
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9rem",
                        color: "#888",
                        margin: 0,
                        lineHeight: 1.7,
                      }}
                    >
                      Have a question or want to volunteer? We'll get back to
                      you as soon as possible.
                    </p>
                  </div>

                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFinish}
                    className="contact-form-wrap"
                    requiredMark={false}
                  >
                    <Row gutter={[16, 0]}>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          label="Full Name"
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your name",
                            },
                          ]}
                        >
                          <Input
                            prefix={<UserOutlined />}
                            placeholder="Your full name"
                            size="large"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          label="Email Address"
                          name="email"
                          rules={[
                            { required: true, message: "Email is required" },
                            { type: "email", message: "Enter a valid email" },
                          ]}
                        >
                          <Input
                            prefix={<MailOutlined />}
                            placeholder="your@email.com"
                            size="large"
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item
                      label="Message"
                      name="message"
                      rules={[
                        { required: true, message: "Please enter a message" },
                      ]}
                    >
                      <Input.TextArea
                        placeholder="Write your message here..."
                        rows={5}
                        style={{ resize: "vertical" }}
                      />
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0 }}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        icon={<SendOutlined />}
                        className="submit-btn"
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 700,
                          fontSize: 14,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          background: `linear-gradient(135deg, ${primary} 0%, #a066bc 100%)`,
                          border: "none",
                          borderRadius: 10,
                          height: 50,
                          paddingInline: 36,
                          boxShadow: `0 4px 18px ${primaryGlow}`,
                          transition: "all 0.25s ease",
                        }}
                      >
                        Send Message
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Col>

              {/* Right panel: Map embed + closing note */}
              <Col xs={24} lg={10}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    border: "1px solid rgba(133,74,154,0.08)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                    overflow: "hidden",
                    marginBottom: 20,
                  }}
                >
                  <iframe
                    title="Toto Kalezi Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.688!2d36.96!3d-1.148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDgnNTIuOCJTIDM2wrA1NycyNy45IkU!5e0!3m2!1sen!2ske!4v1"
                    width="100%"
                    height={240}
                    style={{ border: 0, display: "block" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div style={{ padding: "18px 22px" }}>
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.85rem",
                        color: "#777",
                        margin: 0,
                        lineHeight: 1.7,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <EnvironmentOutlined
                        style={{ color: primary, marginTop: 2, flexShrink: 0 }}
                      />
                      Mutonya, Eastern Bypass, Ruiru, Kiambu, Kenya
                    </p>
                  </div>
                </div>

                {/* Closing note */}
                <div
                  style={{
                    position: "relative",
                    background: `linear-gradient(135deg, #130a1a 0%, #1e0d28 100%)`,
                    borderRadius: 16,
                    border: `1px solid rgba(133,74,154,0.2)`,
                    padding: "28px 28px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "20%",
                      right: "20%",
                      height: 3,
                      background: `linear-gradient(90deg, transparent, ${primary}, transparent)`,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: -40,
                      right: -40,
                      width: 140,
                      height: 140,
                      background: primaryGlow,
                      borderRadius: "50%",
                      filter: "blur(50px)",
                      opacity: 0.3,
                      pointerEvents: "none",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "1.05rem",
                      color: "rgba(255,255,255,0.6)",
                      margin: 0,
                      lineHeight: 1.8,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    "Thank you for reaching out. Your thoughts and questions are
                    important to us — we look forward to connecting with you."
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </MobileMotion>
    </>
  );
}

export default Contact;
