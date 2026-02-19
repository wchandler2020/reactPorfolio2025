import React, { useState } from "react";
import { EXPERIENCES } from "../../constants/index";

const ExperienceCard = ({ item, index }) => {
  const [hovered, setHovered] = useState(false);
  const isArmy = item.company === "United States Army";

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1px 1fr",
        gap: 0,
        marginBottom: 0,
      }}
    >
      {/* Date column */}
      <div
        style={{
          paddingRight: 40,
          paddingTop: 4,
          paddingBottom: 48,
          textAlign: "right",
        }}
      >
        <span
          className="mono"
          style={{
            fontSize: 11,
            color: isArmy ? "var(--amber)" : "var(--muted)",
            letterSpacing: "0.08em",
            lineHeight: 1.6,
          }}
        >
          {item.year}
        </span>
      </div>

      {/* Timeline */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Dot */}
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: isArmy ? "var(--amber)" : "var(--surface-2)",
            border: `2px solid ${isArmy ? "var(--amber)" : "var(--border)"}`,
            flexShrink: 0,
            marginTop: 4,
            zIndex: 1,
            boxShadow: isArmy ? "0 0 16px rgba(232,160,48,0.5)" : "none",
            animation: isArmy ? "pulse-amber 2s infinite" : "none",
          }}
        />
        {/* Line */}
        {index < EXPERIENCES.length - 1 && (
          <div
            style={{
              flex: 1,
              width: 1,
              background: "var(--border)",
              marginTop: 8,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          paddingLeft: 40,
          paddingBottom: 48,
          paddingTop: 0,
        }}
      >
        <div
          style={{
            background: hovered ? "var(--surface-2)" : "transparent",
            border: `1px solid ${hovered ? (isArmy ? "rgba(232,160,48,0.3)" : "var(--border)") : "transparent"}`,
            padding: hovered ? "24px" : "0px",
            marginLeft: hovered ? -24 : 0,
            transition: "all 0.2s ease",
            borderRadius: 0,
          }}
        >
          {/* Role */}
          <h3
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "var(--text)",
              marginBottom: 4,
            }}
          >
            {item.role}
          </h3>

          {/* Company + Army badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <span
              style={{
                fontSize: 14,
                color: isArmy ? "var(--amber)" : "var(--teal)",
                fontWeight: 500,
              }}
            >
              {item.company}
            </span>
            {isArmy && (
              <span
                className="mono"
                style={{
                  fontSize: 9,
                  background: "rgba(232,160,48,0.15)",
                  border: "1px solid rgba(232,160,48,0.3)",
                  color: "var(--amber)",
                  padding: "2px 8px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                ★ Bronze Star
              </span>
            )}
          </div>

          <p
            style={{
              fontSize: 14,
              color: "var(--muted-2)",
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: item.technologies.length > 0 ? 16 : 0,
            }}
          >
            {item.description}
          </p>

          {/* Tags */}
          {item.technologies.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {item.technologies.map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
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
        03
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ marginBottom: 72 }}>
          <div className="section-label" style={{ marginBottom: 14 }}>
            — Career
          </div>
          <h2
            className="bebas"
            style={{
              fontSize: "clamp(48px, 7vw, 80px)",
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            Work{" "}
            <span style={{ color: "var(--amber)" }}>Experience</span>
          </h2>
        </div>

        <div>
          {EXPERIENCES.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;