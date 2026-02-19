import React from "react";
import aboutImg4 from "../../assets/about/about_img_4.jpg";
import aboutImg2 from "../../assets/about/about_img_2.jpg";
import { ABOUT_TEXT } from "../../constants/index";

const About = () => {
  return (
    <section
      id="about"
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        borderTop: "1px solid var(--border)",
        position: "relative",
      }}
    >
      {/* Section number */}
      <div
        className="bebas"
        style={{
          position: "absolute",
          top: 60,
          right: 0,
          fontSize: 160,
          color: "var(--surface-2)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        01
      </div>

      <div style={{ position: "relative" }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 14 }}>
            — Background
          </div>
          <h2
            className="bebas"
            style={{
              fontSize: "clamp(48px, 7vw, 80px)",
              letterSpacing: "-0.01em",
              lineHeight: 1,
              color: "var(--text)",
            }}
          >
            Get To{" "}
            <span style={{ color: "var(--amber)" }}>Know Me</span>
          </h2>
        </div>

        {/* Body: text + image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Text */}
          <div>
            {ABOUT_TEXT.map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: i === 0 ? "var(--text)" : "var(--muted-2)",
                  fontWeight: i === 0 ? 400 : 300,
                  marginBottom: 24,
                }}
              >
                {text}
              </p>
            ))}

            {/* Highlight badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 36 }}>
              {[
                "U.S. Army Veteran",
                "Bronze Star w/ Valor",
                "B.S. Information Technology",
                "B.S. Business Management",
                "Full Stack Developer",
                "Chicago, IL",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: "var(--amber)",
                    background: "var(--amber-dim)",
                    border: "1px solid rgba(232,160,48,0.2)",
                    padding: "5px 12px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Image stack */}
          <div style={{ position: "relative" }}>
            {/* Main image */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <img
                src={aboutImg4}
                alt="William Chandler"
                style={{
                  width: "100%",
                  height: 460,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Amber corner accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 60,
                  height: 4,
                  background: "var(--amber)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 4,
                  height: 60,
                  background: "var(--amber)",
                }}
              />
            </div>

            {/* Secondary image (peeking) */}
            {/* <div
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                width: 140,
                height: 140,
                border: "3px solid var(--bg)",
                zIndex: 0,
                overflow: "hidden",
              }}
            >
              <img
                src={aboutImg2}
                alt="William"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div> */}

            {/* Info card */}
            {/* <div
              style={{
                position: "absolute",
                bottom: -20,
                right: -20,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                padding: "16px 20px",
                zIndex: 2,
                minWidth: 160,
              }}
            >
              <div
                className="bebas"
                style={{ fontSize: 32, color: "var(--amber)", lineHeight: 1 }}
              >
                20+
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginTop: 4,
                }}
              >
                Commendations
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;