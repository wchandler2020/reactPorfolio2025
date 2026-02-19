import React, { useState } from "react";
import { PROJECTS } from "../../constants/index";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", display: "flex", flexDirection: "column", width: "100%" }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: 220 }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? "linear-gradient(180deg, rgba(6,7,10,0) 0%, rgba(6,7,10,0.85) 100%)"
              : "linear-gradient(180deg, rgba(6,7,10,0) 40%, rgba(6,7,10,0.6) 100%)",
            transition: "all 0.3s ease",
          }}
        />

        {/* Quick links on hover */}
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            display: "flex",
            gap: 8,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.25s ease",
          }}
        >
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: 34,
                height: 34,
                background: "rgba(6,7,10,0.8)",
                backdropFilter: "blur(8px)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text)",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--amber)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <FaGithub size={14} />
            </a>
          )}
          {project.demo_link && (
            <a
              href={project.demo_link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: 34,
                height: 34,
                background: "rgba(6,7,10,0.8)",
                backdropFilter: "blur(8px)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text)",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--amber)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <TbWorldWww size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Project number */}
        <div
          className="mono"
          style={{
            fontSize: 10,
            color: "var(--amber)",
            letterSpacing: "0.2em",
            marginBottom: 8,
          }}
        >
          {String(project.id).padStart(2, "0")}
        </div>

        <h3
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: "var(--text)",
            marginBottom: 10,
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: 13,
            color: "var(--muted-2)",
            lineHeight: 1.7,
            fontWeight: 300,
            marginBottom: 16,
          }}
        >
          {project.description.split(" ").slice(0, 22).join(" ")}…
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 20, marginTop: "auto" }}>
          {project.technologies.slice(0, 4).map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-tag" style={{ color: "var(--muted)" }}>
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Details link */}
        <Link
          to={`/project/${project.id}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: hovered ? "var(--amber)" : "var(--muted-2)",
            textDecoration: "none",
            transition: "color 0.2s",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          View Details <FiArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        borderTop: "1px solid var(--border)",
        position: "relative",
      }}
    >
      {/* Background number */}
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
        04
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ marginBottom: 64, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div className="section-label" style={{ marginBottom: 14 }}>
              — Portfolio
            </div>
            <h2
              className="bebas"
              style={{
                fontSize: "clamp(48px, 7vw, 80px)",
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}
            >
              My{" "}
              <span style={{ color: "var(--amber)" }}>Work</span>
            </h2>
          </div>

          <p
            className="mono"
            style={{
              fontSize: 11,
              color: "var(--muted)",
              maxWidth: 200,
              textAlign: "right",
              letterSpacing: "0.05em",
              lineHeight: 1.6,
            }}
          >
            {PROJECTS.length} projects shipped across different domains
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {PROJECTS.map((project) => (
            <div key={project.id} style={{ display: "flex" }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;