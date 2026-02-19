import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { IoMdArrowBack } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

const ProjectDetail = ({ data }) => {
  const images = [data.image_1, data.image_2, data.image_3, data.image_4].filter(Boolean);
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <div style={{ paddingTop: 100, paddingBottom: 80 }}>
      {/* Back nav */}
      <div style={{ marginBottom: 40 }}>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            color: "var(--muted-2)",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            fontFamily: "'JetBrains Mono', monospace",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--amber)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-2)")}
        >
          <IoMdArrowBack size={16} /> Back to Portfolio
        </Link>
      </div>

      {/* Project header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 52,
          gap: 40,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div className="section-label" style={{ marginBottom: 14 }}>
            — Case Study
          </div>
          <h1
            className="bebas"
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 1,
              color: "var(--text)",
              maxWidth: 600,
            }}
          >
            {data.title}
          </h1>
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 12, flexShrink: 0, flexWrap: "wrap" }}>
          {data.demo_link && (
            <a
              href={data.demo_link}
              target="_blank"
              rel="noreferrer"
              className="btn-amber"
              style={{ textDecoration: "none" }}
            >
              <TbWorldWww size={16} /> Live Demo
            </a>
          )}
          {data.github_link && (
            <a
              href={data.github_link}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              style={{ textDecoration: "none" }}
            >
              <FaGithub size={16} /> View Code
            </a>
          )}
        </div>
      </div>

      {/* Main grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 360px",
          gap: 52,
          alignItems: "start",
        }}
      >
        {/* Left: gallery */}
        <div>
          {/* Main image */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              overflow: "hidden",
              marginBottom: 12,
              position: "relative",
            }}
          >
            <img
              src={activeImg}
              alt={data.title}
              style={{
                width: "100%",
                height: 440,
                objectFit: "contain",
                display: "block",
                background: "var(--surface-2)",
              }}
            />
            {/* Amber corner */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 40,
                height: 40,
                borderTop: "2px solid var(--amber)",
                borderLeft: "2px solid var(--amber)",
                opacity: 0.5,
              }}
            />
          </div>

          {/* Thumbnails */}
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${images.length}, 1fr)`, gap: 8 }}>
            {images.map((img, i) => (
              <div
                key={i}
                className={`thumb ${activeImg === img ? "thumb-active" : ""}`}
                onClick={() => setActiveImg(img)}
                style={{
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "var(--surface)",
                }}
              >
                <img
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  style={{
                    width: "100%",
                    height: 80,
                    objectFit: "cover",
                    display: "block",
                    opacity: activeImg === img ? 1 : 0.5,
                    transition: "opacity 0.2s",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: details */}
        <div>
          {/* Description */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              padding: "28px",
              marginBottom: 20,
            }}
          >
            <h3
              className="mono"
              style={{
                fontSize: 10,
                color: "var(--amber)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              About this project
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "var(--muted-2)",
                lineHeight: 1.9,
                fontWeight: 300,
              }}
            >
              {data.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              padding: "28px",
              marginBottom: 20,
            }}
          >
            <h3
              className="mono"
              style={{
                fontSize: 10,
                color: "var(--amber)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Technologies Used
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {data.technologies.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              padding: "28px",
            }}
          >
            <h3
              className="mono"
              style={{
                fontSize: 10,
                color: "var(--amber)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Project Links
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {data.demo_link ? (
                <a
                  href={data.demo_link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 16px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 500,
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--amber)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <TbWorldWww /> Live Demo
                  </span>
                  <FiExternalLink size={13} style={{ color: "var(--muted)" }} />
                </a>
              ) : (
                <div style={{ padding: "12px 16px", background: "var(--surface-2)", border: "1px solid var(--border)", fontSize: 13, color: "var(--muted)", display: "flex", alignItems: "center", gap: 8 }}>
                  <TbWorldWww /> Demo not available
                </div>
              )}
              {data.github_link ? (
                <a
                  href={data.github_link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 16px",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 500,
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--amber)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <FaGithub /> GitHub Repository
                  </span>
                  <FiExternalLink size={13} style={{ color: "var(--muted)" }} />
                </a>
              ) : (
                <div style={{ padding: "12px 16px", background: "var(--surface-2)", border: "1px solid var(--border)", fontSize: 13, color: "var(--muted)", display: "flex", alignItems: "center", gap: 8 }}>
                  <FaGithub /> Private Repository
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;