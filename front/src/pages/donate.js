import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FloatButton, Form, Input, Button, notification, Row, Col } from "antd";
import {
  PhoneOutlined,
  DollarOutlined,
  HeartOutlined,
  HeartFilled,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  TeamOutlined,
  GiftOutlined,
} from "@ant-design/icons";
import Motion from "../components/motion";
import { useUser } from "../contexts/UserContext";
import axios from "axios";
import heroBg from "../assets/images/gallery_images/19.jpeg";

// ── Tokens ──────────────────────────────────────────────────────
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
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50%       { transform: scale(1.08); }
  }

  .donate-hero-bg {
    background-image: url(/src/assets/images/gallery_images/19.jpeg);
  }

  /* Ant Design Form overrides */
  .donate-form-wrap .ant-form-item-label > label {
    font-family: 'Outfit', sans-serif !important;
    font-size: 13px !important;
    font-weight: 600 !important;
    letter-spacing: 0.04em !important;
    color: rgba(255,255,255,0.75) !important;
    text-transform: uppercase !important;
  }
  .donate-form-wrap .ant-input,
  .donate-form-wrap .ant-input-number,
  .donate-form-wrap .ant-input-affix-wrapper {
    background: rgba(255,255,255,0.06) !important;
    border: 1px solid rgba(133,74,154,0.35) !important;
    border-radius: 8px !important;
    color: #fff !important;
    font-family: 'Outfit', sans-serif !important;
    font-size: 15px !important;
    padding: 12px 16px !important;
    transition: all 0.25s ease !important;
  }
  .donate-form-wrap .ant-input-affix-wrapper {
    padding: 0 16px !important;
  }
  .donate-form-wrap .ant-input-affix-wrapper .ant-input {
    padding: 12px 0 !important;
    border: none !important;
    background: transparent !important;
  }
  .donate-form-wrap .ant-input::placeholder,
  .donate-form-wrap .ant-input-affix-wrapper .ant-input::placeholder {
    color: rgba(255,255,255,0.28) !important;
  }
  .donate-form-wrap .ant-input:focus,
  .donate-form-wrap .ant-input-affix-wrapper:focus,
  .donate-form-wrap .ant-input-affix-wrapper-focused {
    border-color: ${primary} !important;
    box-shadow: 0 0 0 3px ${primaryDim} !important;
  }
  .donate-form-wrap .ant-input-prefix {
    color: rgba(133,74,154,0.7) !important;
    margin-right: 10px !important;
  }
  .donate-form-wrap .ant-form-item-explain-error {
    font-family: 'Outfit', sans-serif !important;
    font-size: 12px !important;
    color: #ff6b9d !important;
  }
  .preset-amount-btn:hover {
    background: ${primary} !important;
    border-color: ${primary} !important;
    color: #fff !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 4px 14px ${primaryGlow} !important;
  }
  .preset-amount-btn.active-preset {
    background: ${primary} !important;
    border-color: ${primary} !important;
    color: #fff !important;
    box-shadow: 0 4px 14px ${primaryGlow} !important;
  }
  .trust-badge:hover {
    border-color: ${primaryMid} !important;
    background: ${primaryDim} !important;
  }
  .impact-row-item:hover {
    background: ${primaryDim} !important;
    border-color: ${primaryMid} !important;
    transform: translateX(4px) !important;
  }
`;

const presetAmounts = [100, 500, 1000, 2500, 5000];

const impactItems = [
  {
    icon: <GiftOutlined />,
    amount: "KES 100",
    desc: "Provides a nutritious meal for a child",
  },
  {
    icon: <TeamOutlined />,
    amount: "KES 500",
    desc: "Covers school supplies for a week",
  },
  {
    icon: <ThunderboltOutlined />,
    amount: "KES 1,000",
    desc: "Supports healthcare for one person",
  },
  {
    icon: <SafetyCertificateOutlined />,
    amount: "KES 5,000",
    desc: "Helps shelter a family for a month",
  },
];

const trustBadges = [
  { icon: <SafetyCertificateOutlined />, label: "Secure Payment" },
  { icon: <HeartFilled />, label: "100% Goes to Cause" },
  { icon: <ThunderboltOutlined />, label: "Instant Processing" },
];

function Donate() {
  const location = useLocation();
  const amountFromButton = location.state?.amount || "";
  const formRef = useRef(null);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [activePreset, setActivePreset] = useState(null);
  const { isMobile } = useUser();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (amountFromButton) {
      form.setFieldsValue({ amount: amountFromButton });
      setActivePreset(amountFromButton);
    }
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [amountFromButton, form]);

  const handlePreset = (amt) => {
    setActivePreset(amt);
    form.setFieldsValue({ amount: amt });
  };

  const handleFinish = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3001/TotoKalezi/donate",
        values,
        { headers: { "Content-Type": "application/json" } },
      );
      if (res.data.success) {
        api.success({
          message: "Thank you for your generosity!",
          description:
            "Your donation is being processed. You'll receive an M-Pesa prompt shortly.",
          placement: "topRight",
          duration: 6,
        });
        form.resetFields();
        setActivePreset(null);
      } else {
        api.error({
          message: "Request failed",
          description: "Please try again.",
          placement: "topRight",
        });
      }
    } catch (err) {
      api.error({
        message: "Something went wrong",
        description: err.message,
        placement: "topRight",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <style>{globalStyles}</style>
      <Motion>
        <>
          <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
            <FloatButton.BackTop visibilityHeight={0} title="Back to top" />
          </FloatButton.Group>
        </>

        <div style={{ background: "#f5f3f7", minHeight: "100vh" }}>
          {/* ── HERO ──────────────────────────────────────────── */}
          <div
            className="donate-hero-bg"
            style={{
              position: "relative",
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingTop: 180,
              paddingBottom: 140,
              overflow: "hidden",
              transition: "all 0.6s ease",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(160deg, rgba(10, 5, 15, 0.42) 0%, rgba(60, 20, 80, 0.42) 50%, rgba(10, 5, 15, 0.68) 100%)`,
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
              {/* Animated heart */}
              <div
                style={{
                  fontSize: 40,
                  color: primary,
                  marginBottom: 16,
                  animation: "pulse 2s ease-in-out infinite",
                  display: "inline-block",
                }}
              >
                <HeartFilled />
              </div>

              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: isMobile ? "2.2rem" : "3.2rem",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 14px",
                  letterSpacing: "0.04em",
                  lineHeight: 1.2,
                  textShadow: "0 2px 24px rgba(0,0,0,0.4)",
                }}
              >
                Make a Difference Today
              </h1>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: isMobile ? "0.95rem" : "1.1rem",
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: 580,
                  margin: "0 auto",
                  lineHeight: 1.8,
                }}
              >
                Your contribution brings hope, shelter, education, and
                healthcare to those who need it most.
              </p>
            </div>
          </div>

          {/* ── MAIN CONTENT ──────────────────────────────────── */}
          <div
            style={{
              maxWidth: 1060,
              margin: "0 auto",
              padding: isMobile ? "24px 16px 64px" : "32px 40px 80px",
            }}
          >
            <Row gutter={[40, 32]} align="top">
              {/* ── LEFT: Impact + Trust ── */}
              <Col xs={24} lg={10}>
                {/* Impact section */}
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    border: `1px solid rgba(133,74,154,0.08)`,
                    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                    padding: "32px 28px",
                    marginBottom: 20,
                  }}
                >
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
                    Your Impact
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "#1a1a1a",
                      margin: "0 0 6px",
                    }}
                  >
                    Every Shilling Counts
                  </h3>
                  <div
                    style={{
                      width: 40,
                      height: 3,
                      background: `linear-gradient(90deg, ${primary}, #a066bc)`,
                      borderRadius: 2,
                      marginBottom: 20,
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {impactItems.map(({ icon, amount, desc }) => (
                      <div
                        key={amount}
                        className="impact-row-item"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 14,
                          padding: "14px 16px",
                          borderRadius: 10,
                          border: "1px solid rgba(133,74,154,0.08)",
                          background: "rgba(133,74,154,0.03)",
                          transition: "all 0.22s ease",
                          cursor: "default",
                        }}
                      >
                        <span
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 8,
                            background: primaryDim,
                            border: `1px solid ${primaryMid}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: primary,
                            fontSize: 16,
                            flexShrink: 0,
                          }}
                        >
                          {icon}
                        </span>
                        <div>
                          <p
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "0.9rem",
                              fontWeight: 700,
                              color: primary,
                              margin: "0 0 2px",
                            }}
                          >
                            {amount}
                          </p>
                          <p
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "0.82rem",
                              color: "#777",
                              margin: 0,
                              lineHeight: 1.5,
                            }}
                          >
                            {desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust badges */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {trustBadges.map(({ icon, label }) => (
                    <div
                      key={label}
                      className="trust-badge"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "13px 18px",
                        borderRadius: 10,
                        border: "1px solid rgba(133,74,154,0.1)",
                        background: "#fff",
                        transition: "all 0.2s ease",
                        cursor: "default",
                      }}
                    >
                      <span style={{ color: primary, fontSize: 18 }}>
                        {icon}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.88rem",
                          fontWeight: 500,
                          color: "#444",
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </Col>

              {/* ── RIGHT: Donation Form ── */}
              <Col xs={24} lg={14}>
                <div
                  ref={formRef}
                  style={{
                    position: "relative",
                    background: `linear-gradient(160deg, #130a1a 0%, #1e0d28 50%, #130a1a 100%)`,
                    borderRadius: 20,
                    border: `1px solid rgba(133,74,154,0.25)`,
                    boxShadow: `0 12px 48px rgba(0,0,0,0.25), 0 0 0 1px rgba(133,74,154,0.08)`,
                    padding: isMobile ? "32px 24px" : "44px 48px",
                    overflow: "hidden",
                  }}
                >
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
                  {/* Glow orb */}
                  <div
                    style={{
                      position: "absolute",
                      top: -60,
                      right: -60,
                      width: 220,
                      height: 220,
                      background: primaryGlow,
                      borderRadius: "50%",
                      filter: "blur(70px)",
                      opacity: 0.25,
                      pointerEvents: "none",
                    }}
                  />

                  <div style={{ position: "relative", zIndex: 1 }}>
                    {/* Form header */}
                    <div style={{ marginBottom: 28 }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 7,
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
                        <HeartOutlined /> Donate via M-Pesa
                      </span>
                      <h2
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.9rem",
                          fontWeight: 700,
                          color: "#fff",
                          margin: "0 0 6px",
                          letterSpacing: "0.02em",
                        }}
                      >
                        Donate Here
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
                          color: "rgba(255,255,255,0.5)",
                          margin: 0,
                          lineHeight: 1.7,
                        }}
                      >
                        Fill in your details below — you'll receive an M-Pesa
                        prompt on your phone.
                      </p>
                    </div>

                    {/* Preset amounts */}
                    <div style={{ marginBottom: 28 }}>
                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.4)",
                          margin: "0 0 12px",
                        }}
                      >
                        Quick Select Amount (KES)
                      </p>
                      <div
                        style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
                      >
                        {presetAmounts.map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            className={`preset-amount-btn${activePreset === amt ? " active-preset" : ""}`}
                            onClick={() => handlePreset(amt)}
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: "0.88rem",
                              fontWeight: 600,
                              color:
                                activePreset === amt
                                  ? "#fff"
                                  : "rgba(255,255,255,0.6)",
                              background:
                                activePreset === amt
                                  ? primary
                                  : "rgba(133,74,154,0.1)",
                              border: `1px solid ${activePreset === amt ? primary : "rgba(133,74,154,0.28)"}`,
                              borderRadius: 8,
                              padding: "8px 18px",
                              cursor: "pointer",
                              transition: "all 0.22s ease",
                              boxShadow:
                                activePreset === amt
                                  ? `0 4px 14px ${primaryGlow}`
                                  : "none",
                            }}
                          >
                            {amt.toLocaleString()}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Ant Design Form */}
                    <Form
                      form={form}
                      layout="vertical"
                      onFinish={handleFinish}
                      className="donate-form-wrap"
                      requiredMark={false}
                    >
                      <Form.Item
                        label="Phone Number"
                        name="phone_number"
                        rules={[
                          {
                            required: true,
                            message: "Phone number is required",
                          },
                          {
                            pattern: /^2547\d{8}$/,
                            message: "Use format: 2547XXXXXXXX",
                          },
                        ]}
                      >
                        <Input
                          prefix={<PhoneOutlined />}
                          placeholder="2547XXXXXXXX"
                          size="large"
                        />
                      </Form.Item>

                      <Form.Item
                        label="Donation Amount (KES)"
                        name="amount"
                        rules={[
                          { required: true, message: "Please enter an amount" },
                          {
                            type: "number",
                            min: 1,
                            message: "Amount must be greater than 0",
                            transform: (v) => Number(v),
                          },
                        ]}
                      >
                        <Input
                          prefix={<DollarOutlined />}
                          placeholder="e.g. 500"
                          type="number"
                          size="large"
                          onChange={() => setActivePreset(null)}
                        />
                      </Form.Item>

                      <Form.Item style={{ marginBottom: 0, marginTop: 8 }}>
                        <Button
                          type="primary"
                          htmlType="submit"
                          loading={loading}
                          block
                          size="large"
                          icon={<HeartFilled />}
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 700,
                            fontSize: 15,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            background: `linear-gradient(135deg, ${primary} 0%, #a066bc 100%)`,
                            border: "none",
                            borderRadius: 10,
                            height: 52,
                            boxShadow: `0 4px 20px ${primaryGlow}`,
                            transition: "all 0.25s ease",
                          }}
                        >
                          {loading ? "Processing..." : "Donate Now"}
                        </Button>
                      </Form.Item>
                    </Form>

                    {/* Footer quote */}
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic",
                        fontSize: "0.95rem",
                        color: "rgba(255,255,255,0.28)",
                        textAlign: "center",
                        margin: "24px 0 0",
                        lineHeight: 1.7,
                      }}
                    >
                      "Your generosity is the key to bringing hope to those who
                      need it most."
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Motion>
    </>
  );
}

export default Donate;
