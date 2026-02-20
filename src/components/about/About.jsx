import React from "react";
import aboutImg4 from "../../assets/about/about_img_4.jpg";
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
      <style>{`
        @media (max-width: 768px) {
          #about-section-num  { display: none !important; }
          #about-grid         { grid-template-columns: 1fr !important; gap: 36px !important; }
          #about-image-col    { order: -1; }
          #about-main-img     { height: 260px !important; }
          #about-info-card    { display: none !important; }
          #about-para-2,
          #about-para-3       { display: none !important; }
          #about-linkedin     { display: inline-block !important; }
        }
      `}</style>

      {/* Section number — desktop only */}
      <div
        id="about-section-num"
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
        <div style={{ marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 14 }}>
            — Background
          </div>
          <h2
            className="bebas"
            style={{
              fontSize: "clamp(40px, 7vw, 80px)",
              letterSpacing: "-0.01em",
              lineHeight: 1,
              color: "var(--text)",
            }}
          >
            Get To <span style={{ color: "var(--amber)" }}>Know Me</span>
          </h2>
        </div>

        {/* Body */}
        <div
          id="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* ── Text column ── */}
          <div>
            {/* Para 1 — always visible */}
            <p style={{ fontSize: 16, lineHeight: 1.9, color: "var(--text)", fontWeight: 400, marginBottom: 24 }}>
              {ABOUT_TEXT[0]}
            </p>

            {/* Para 2 — hidden on mobile */}
            <p id="about-para-2" style={{ fontSize: 16, lineHeight: 1.9, color: "var(--muted-2)", fontWeight: 300, marginBottom: 24 }}>
              {ABOUT_TEXT[1]}
            </p>

            {/* Para 3 — hidden on mobile */}
            <p id="about-para-3" style={{ fontSize: 16, lineHeight: 1.9, color: "var(--muted-2)", fontWeight: 300, marginBottom: 24 }}>
              {ABOUT_TEXT[2]}
            </p>

            {/* Mobile-only: LinkedIn shortcut instead of wall of text */}
            <a
              id="about-linkedin"
              href="https://www.linkedin.com/in/william-d-chandler/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "none",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "var(--amber)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                marginBottom: 28,
              }}
            >
              Full profile on LinkedIn →
            </a>

            {/* Highlight badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 32 }}>
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

          {/* ── Image column ── */}
          <div id="about-image-col" style={{ position: "relative" }}>
            <div style={{ position: "relative", zIndex: 1 }}>
              <img
                id="about-main-img"
                src={aboutImg4}
                alt="William Chandler"
                style={{ width: "100%", height: 460, objectFit: "cover", display: "block" }}
              />
              {/* Amber corner accents */}
              <div style={{ position: "absolute", bottom: 0, left: 0, width: 60, height: 4, background: "var(--amber)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: 4, height: 60, background: "var(--amber)" }} />
            </div>

            {/* Info card — desktop only */}
            <div
              id="about-info-card"
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
              <div className="bebas" style={{ fontSize: 32, color: "var(--amber)", lineHeight: 1 }}>20+</div>
              <div
                className="mono"
                style={{ fontSize: 10, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 4 }}
              >
                Commendations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;