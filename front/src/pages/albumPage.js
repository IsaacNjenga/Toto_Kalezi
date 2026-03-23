import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Image as AntImage, FloatButton } from "antd";
import {
  PlayCircleFilled,
  PictureOutlined,
  VideoCameraOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import useFetchAlbum from "../hooks/fetchAlbum";
import { useUser } from "../contexts/UserContext";

const primary = "#854a9a";
const dark = "#0a080e";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes sk-shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position:  600px 0; }
  }

  .ap-tile { position: relative; border-radius: 10px; overflow: hidden; cursor: pointer; }
  .ap-tile img { display: block; width: 100%; transition: transform 0.45s ease; }
  .ap-tile:hover img { transform: scale(1.06); }
  .ap-tile-overlay {
    position: absolute; inset: 0; z-index: 1;
    background: linear-gradient(to top, rgba(8,4,15,0.85) 0%, rgba(8,4,15,0.1) 55%, transparent 100%);
    opacity: 0; transition: opacity 0.3s ease;
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 14px; border-radius: 10px;
  }
  .ap-tile:hover .ap-tile-overlay { opacity: 1; }
  .ap-tile-ring {
    position: absolute; inset: 0; z-index: 2; border-radius: 10px;
    border: 2px solid transparent; transition: border-color 0.3s ease; pointer-events: none;
  }
  .ap-tile:hover .ap-tile-ring { border-color: rgba(133,74,154,0.5); }

  .ap-video { position: relative; border-radius: 10px; overflow: hidden; cursor: pointer; background: #111; }
  .ap-video video { display: block; width: 100%; transition: transform 0.4s ease; }
  .ap-video:hover video { transform: scale(1.04); }
  .ap-video-play {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    font-size: 36px; color: rgba(255,255,255,0.8);
    pointer-events: none; transition: all 0.25s ease;
    filter: drop-shadow(0 2px 10px rgba(133,74,154,0.6));
  }
  .ap-video:hover .ap-video-play { color: ${primary}; transform: translate(-50%,-50%) scale(1.15); }

  .sk {
    border-radius: 8px;
    background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.09) 50%, rgba(255,255,255,0.04) 75%);
    background-size: 600px 100%;
    animation: sk-shimmer 1.6s infinite linear;
  }
  .ap-back:hover { background: rgba(255,255,255,0.1) !important; border-color: rgba(255,255,255,0.3) !important; }
  .ap-rule { display: flex; align-items: center; gap: 12px; margin-bottom: 22px; }
  .ap-rule-line { flex: 1; height: 1px; background: rgba(255,255,255,0.08); }

  @media (max-width: 640px) {
    .ap-hero-title { font-size: 1.6rem !important; }
    .ap-stat-val   { font-size: 1.5rem !important; }
  }
`;

function Masonry({ items, columns, gap = 12, renderItem }) {
  const cols = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => cols[i % columns].push(item));
  return (
    <div style={{ display: "flex", gap, alignItems: "flex-start" }}>
      {cols.map((col, ci) => (
        <div
          key={ci}
          style={{ flex: 1, display: "flex", flexDirection: "column", gap }}
        >
          {col.map((item) => renderItem(item))}
        </div>
      ))}
    </div>
  );
}

function SectionRule({ icon, label }) {
  return (
    <div className="ap-rule">
      <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>
        {icon}
      </span>
      <span
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <div className="ap-rule-line" />
    </div>
  );
}

function Skeleton({ isMobile }) {
  const cols = isMobile ? 2 : 3;
  return (
    <>
      <style>{styles}</style>
      <div style={{ background: dark, minHeight: "100vh" }}>
        <div
          style={{
            position: "relative",
            height: isMobile ? 320 : 480,
            overflow: "hidden",
          }}
        >
          <div
            className="sk"
            style={{ position: "absolute", inset: 0, borderRadius: 0 }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 200,
              background: `linear-gradient(to bottom, transparent, ${dark})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 36,
              left: isMobile ? 20 : 48,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
              {[60, 50, 70].map((w, i) => (
                <div
                  key={i}
                  className="sk"
                  style={{ width: w, height: 18, borderRadius: 20 }}
                />
              ))}
            </div>
            <div
              className="sk"
              style={{
                width: isMobile ? 200 : 340,
                height: 30,
                borderRadius: 6,
              }}
            />
            <div
              className="sk"
              style={{
                width: isMobile ? 160 : 260,
                height: 14,
                borderRadius: 6,
              }}
            />
            <div style={{ display: "flex", gap: 36, marginTop: 8 }}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{ display: "flex", flexDirection: "column", gap: 6 }}
                >
                  <div
                    className="sk"
                    style={{ width: 36, height: 22, borderRadius: 6 }}
                  />
                  <div
                    className="sk"
                    style={{ width: 40, height: 9, borderRadius: 20 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ padding: isMobile ? "24px 14px" : "36px 48px" }}>
          <div
            className="sk"
            style={{
              width: 110,
              height: 10,
              borderRadius: 20,
              marginBottom: 22,
            }}
          />
          <div style={{ display: "flex", gap: 12 }}>
            {Array.from({ length: cols }).map((_, ci) => (
              <div
                key={ci}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {[180, 250, 160, 210].map((h, i) => (
                  <div
                    key={i}
                    className="sk"
                    style={{
                      height: ((h + ci * 30 + i * 14) % 120) + 130,
                      borderRadius: 10,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function AlbumPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isMobile } = useUser();
  const { album, loading, fetchAlbum } = useFetchAlbum();
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    if (id) fetchAlbum(id);
  }, [id]); // eslint-disable-line

  useEffect(() => {
    if (!album?.cover) return;
    const img = new window.Image();
    img.src = album.cover;
    img.onload = () => setHeroLoaded(true);
  }, [album?.cover]);

  const cols = isMobile ? 2 : 3;
  const media = album?.media ?? []; //eslint-disable-line
  const images = useMemo(
    () => media.filter((m) => m.type === "image"),
    [media],
  );
  const videos = useMemo(
    () => media.filter((m) => m.type === "video"),
    [media],
  );
  const banners = useMemo(
    () => [...new Set(media.map((m) => m.banner).filter(Boolean))],
    [media],
  );

  if (loading) return <Skeleton isMobile={isMobile} />;

  return (
    <>
      <style>{styles}</style>
      <div style={{ background: dark, minHeight: "100vh" }}>
        <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
          <FloatButton.BackTop visibilityHeight={0} />
        </FloatButton.Group>

        {/* ── HERO ── */}
        <div
          style={{
            position: "relative",
            height: isMobile ? 360 : 520,
            overflow: "hidden",
            background: `url(${album?.cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: heroLoaded || !album?.cover ? 1 : 0,
            transition: "all 0.6s ease",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(160deg, rgba(8,4,15,0.3) 0%, rgba(60,20,80,0.15) 50%, rgba(8,4,15,0.5) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 220,
              background: `linear-gradient(to bottom, transparent, ${dark})`,
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

          {/* Back */}
          <button
            className="ap-back"
            onClick={() => navigate(-1)}
            style={{
              position: "absolute",
              top: 20,
              left: isMobile ? 16 : 32,
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "6px 14px",
              borderRadius: 8,
              cursor: "pointer",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(10,5,20,0.5)",
              backdropFilter: "blur(8px)",
              color: "rgba(255,255,255,0.75)",
              fontFamily: "'Outfit', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              transition: "all 0.2s ease",
            }}
          >
            <ArrowLeftOutlined style={{ fontSize: 12 }} /> Gallery
          </button>

          {/* Info */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: isMobile ? "0 20px 32px" : "0 48px 40px",
              animation: "heroFadeUp 0.8s ease both",
            }}
          >
            <h1
              className="ap-hero-title"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile ? "1.8rem" : "2.8rem",
                fontWeight: 700,
                color: "#fff",
                margin: "0 0 8px",
                lineHeight: 1.2,
                textShadow: "0 2px 24px rgba(0,0,0,0.5)",
              }}
            >
              {album?.title}
            </h1>

            {album?.description && (
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: isMobile ? 12 : 14,
                  color: "rgba(255,255,255,0.45)",
                  margin: "10px 0 22px",
                  maxWidth: 860,
                  maxHeight: 5,
                  lineHeight: 1.6,
                  ellipsis: "-webkit-auto",
                }}
              >
                {album.description}
              </p>
            )}

            <div
              style={{
                display: "flex",
                gap: isMobile ? 28 : 44,
                flexWrap: "wrap",
              }}
            >
              {[
                { value: images.length, label: "Photos" },
                { value: videos.length, label: "Videos" },
                { value: banners.length, label: "Tags" },
              ]
                .filter(({ value }) => value > 0)
                .map(({ value, label }) => (
                  <div key={label}>
                    <div
                      className="ap-stat-val"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: isMobile ? "1.5rem" : "2rem",
                        fontWeight: 700,
                        color: "#fff",
                        lineHeight: 1,
                      }}
                    >
                      {value}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 10,
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.38)",
                        marginTop: 3,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* ── MEDIA ── */}
        <div
          style={{
            padding: isMobile ? "24px 14px 72px" : "36px 48px 80px",
            animation: "fadeIn 0.5s 0.3s ease both",
          }}
        >
          {media.length === 0 && (
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.2)",
                textAlign: "center",
                padding: "80px 0",
              }}
            >
              This album has no media yet.
            </p>
          )}

          {images.length > 0 && (
            <div style={{ marginBottom: videos.length > 0 ? 44 : 0 }}>
              <SectionRule
                icon={<PictureOutlined />}
                label={`Photos · ${images.length}`}
              />
              <AntImage.PreviewGroup>
                <Masonry
                  items={images}
                  columns={cols}
                  gap={isMobile ? 8 : 12}
                  renderItem={(item) => (
                    <div key={item._id} className="ap-tile">
                      <div className="ap-tile-ring" />
                      <AntImage
                        src={item.url}
                        alt={item.title}
                        style={{
                          width: "100%",
                          borderRadius: 10,
                          display: "block",
                        }}
                        wrapperStyle={{ display: "block" }}
                        preview={{ mask: false }}
                      />
                      <div className="ap-tile-overlay">
                        {item.banner && (
                          <span
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontSize: 9,
                              fontWeight: 700,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "rgba(133,74,154,0.9)",
                              marginBottom: 4,
                            }}
                          >
                            {item.banner}
                          </span>
                        )}
                        <p
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 12,
                            fontWeight: 700,
                            color: "#fff",
                            margin: 0,
                            lineHeight: 1.3,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {item.title}
                        </p>
                      </div>
                    </div>
                  )}
                />
              </AntImage.PreviewGroup>
            </div>
          )}

          {videos.length > 0 && (
            <div>
              <SectionRule
                icon={<VideoCameraOutlined />}
                label={`Videos · ${videos.length}`}
              />
              <Masonry
                items={videos}
                columns={isMobile ? 1 : 2}
                gap={isMobile ? 8 : 12}
                renderItem={(item) => (
                  <div key={item._id} className="ap-video">
                    <video
                      controls
                      style={{
                        width: "100%",
                        display: "block",
                        borderRadius: 10,
                      }}
                    >
                      <source src={item.url} type="video/mp4" />
                    </video>
                    <PlayCircleFilled className="ap-video-play" />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          "linear-gradient(to top, rgba(8,4,15,0.85), transparent)",
                        padding: "24px 14px 12px",
                        borderRadius: "0 0 10px 10px",
                        pointerEvents: "none",
                      }}
                    >
                      {item.banner && (
                        <span
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: 9,
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "rgba(133,74,154,0.85)",
                            display: "block",
                            marginBottom: 3,
                          }}
                        >
                          {item.banner}
                        </span>
                      )}
                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#fff",
                          margin: 0,
                        }}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>
                )}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AlbumPage;
