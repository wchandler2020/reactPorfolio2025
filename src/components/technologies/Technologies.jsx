import React from "react";
import { RiJavascriptLine, RiJavaLine } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandDjango, TbSql } from "react-icons/tb";
import { FaHtml5, FaReact, FaPython } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";

const TECH = [
  { icon: <FaHtml5 />, name: "HTML5", color: "#e34f26" },
  { icon: <IoLogoCss3 />, name: "CSS3", color: "#1572b6" },
  { icon: <RiJavascriptLine />, name: "JavaScript", color: "#f7df1e" },
  { icon: <FaPython />, name: "Python", color: "#3776ab" },
  { icon: <RiJavaLine />, name: "Java", color: "#ed8b00" },
  { icon: <FaReact />, name: "React", color: "#61dafb" },
  { icon: <BiLogoSpringBoot />, name: "Spring Boot", color: "#6db33f" },
  { icon: <TbBrandDjango />, name: "Django", color: "#092e20" },
  { icon: <TbSql />, name: "SQL", color: "#38bdf8" },
];

const TechCard = ({ icon, name, color }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--surface-2)" : "var(--surface)",
        border: `1px solid ${hovered ? color + "50" : "var(--border)"}`,
        padding: "28px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        transition: "all 0.25s ease",
        cursor: "default",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? `0 12px 32px ${color}15` : "none",
      }}
    >
      <div style={{ fontSize: 44, color: hovered ? color : "var(--muted)", transition: "color 0.25s" }}>
        {icon}
      </div>
      <span
        className="mono"
        style={{
          fontSize: 10,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: hovered ? "var(--text)" : "var(--muted)",
          transition: "color 0.25s",
        }}
      >
        {name}
      </span>
    </div>
  );
};

const Technologies = () => {
  return (
    <section
      id="technologies"
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
        02
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 14 }}>
            — Expertise
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
            Tech{" "}
            <span style={{ color: "var(--amber)" }}>Stack</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
            gap: 1,
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {TECH.map((t) => (
            <TechCard key={t.name} {...t} />
          ))}
        </div>

        {/* Also uses */}
        <div style={{ marginTop: 32 }}>
          <p className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
            Also works with:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Docker", "AWS", "Azure", "PostgreSQL", "MySQL", "GraphQL", "Tailwind CSS", "Spring Security", "PyTest", "Selenium", "Pandas", "Tableau", "Figma", "React Query", "Framer Motion"].map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;