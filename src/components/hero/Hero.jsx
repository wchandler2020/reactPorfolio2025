import React from "react";
import { HERO_CONTENT } from "../../constants/index";
import hero6 from "../../assets/hero/hero6.jpg";
import resume from "../../assets/hero/resume/WilliamChandlerChiResume_10_2025.pdf";
import { IoMdDownload } from "react-icons/io";
import { FiArrowDownRight } from "react-icons/fi";

const STATS = [
  { value: "23", label: "Years Military" },
  { value: "5+", label: "Years in Tech" },
  { value: "4", label: "Projects Shipped" },
  { value: "3+", label: "Languages Mastered" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 80,
        paddingBottom: 60,
        position: "relative",
      }}
    >
      {/* Background grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      {/* Amber glow blob */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(232,160,48,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Top label */}
        <div className="section-label animate-fade-up" style={{ marginBottom: 32 }}>
          ● Available for opportunities
        </div>

        {/* Main layout */}
        <div
          id="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 48,
            alignItems: "center",
          }}
        >
          <style>{`
            @media (max-width: 768px) {
              #hero-grid { grid-template-columns: 1fr !important; }
              #hero-photo { display: none !important; }
              #hero-stats { flex-wrap: wrap !important; gap: 20px !important; }
              #hero-stats > div { border-right: none !important; margin-right: 0 !important; flex: 0 0 calc(50% - 10px) !important; }
            }
          `}</style>
          {/* Left: Text */}
          <div>
            {/* Name */}
            <div className="animate-fade-up-d1" style={{ overflow: "hidden" }}>
              <h1
                className="bebas"
                style={{
                  fontSize: "clamp(72px, 12vw, 148px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  margin: 0,
                }}
              >
                William
                <br />
                <span style={{ color: "var(--amber)" }}>Chandler</span>
              </h1>
            </div>

            {/* Title bar */}
            <div
              className="animate-fade-up-d2"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                margin: "24px 0 28px",
              }}
            >
              <div style={{ width: 48, height: 2, background: "var(--amber)" }} />
              <span
                className="mono"
                style={{
                  fontSize: 14,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--muted-2)",
                }}
              >
                Full Stack Developer
              </span>
              <div style={{ width: 48, height: 2, background: "var(--border)" }} />
            </div>

            {/* Bio */}
            <p
              className="animate-fade-up-d3"
              style={{
                maxWidth: 560,
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--muted-2)",
                fontWeight: 300,
                marginBottom: 36,
              }}
            >
              {HERO_CONTENT}
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up-d4"
              style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}
            >
              <button
                className="btn-amber"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                style={{ border: "none", cursor: "pointer" }}
              >
                View My Work <FiArrowDownRight size={16} />
              </button>
              <a href={resume} download="WilliamChandlerChiResume2025.docx" className="btn-ghost" style={{ textDecoration: "none" }}>
                <IoMdDownload size={16} /> Download Resume
              </a>
            </div>

            {/* Stats row */}
            <div
              id="hero-stats"
              className="animate-fade-up-d5"
              style={{
                display: "flex",
                gap: 0,
                borderTop: "1px solid var(--border)",
                paddingTop: 28,
              }}
            >
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    paddingRight: 24,
                    borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
                    marginRight: i < STATS.length - 1 ? 24 : 0,
                  }}
                >
                  <div
                    className="bebas"
                    style={{ fontSize: 36, color: "var(--amber)", lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="mono"
                    style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 4 }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div
            id="hero-photo"
            className="animate-fade-in"
            style={{
              position: "relative",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Decorative frame */}
            <div
              style={{
                position: "absolute",
                top: -12,
                right: -12,
                width: "100%",
                height: "100%",
                border: "2px solid var(--amber)",
                zIndex: 0,
                opacity: 0.4,
              }}
            />
            <img
              src={hero6}
              alt="William Chandler"
              style={{
                width: 320,
                height: 400,
                objectFit: "cover",
                position: "relative",
                zIndex: 1,
                display: "block",
              }}
            />
            {/* Army badge */}
            <div
              style={{
                position: "absolute",
                bottom: -16,
                left: -16,
                zIndex: 2,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div style={{ width: 8, height: 8, background: "var(--amber)", borderRadius: "50%" }} />
              <span className="mono" style={{ fontSize: 10, color: "var(--muted-2)", letterSpacing: "0.12em" }}>
                U.S. ARMY VETERAN
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;