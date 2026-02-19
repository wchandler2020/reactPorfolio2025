import React, { useState } from "react";
import { CONTACT } from "../../constants/index";
import { FaLocationDot, FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const ContactItem = ({ icon, label, value, href }) => {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--surface-2)" : "var(--surface)",
        border: `1px solid ${hovered ? "var(--amber)" : "var(--border)"}`,
        padding: "24px 28px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        transition: "all 0.2s ease",
        cursor: href ? "pointer" : "default",
        textDecoration: "none",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          background: hovered ? "var(--amber-dim)" : "var(--surface-2)",
          border: `1px solid ${hovered ? "rgba(232,160,48,0.3)" : "var(--border)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: hovered ? "var(--amber)" : "var(--muted)",
          transition: "all 0.2s",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          className="mono"
          style={{
            fontSize: 10,
            color: "var(--muted)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: hovered ? "var(--text)" : "var(--muted-2)",
            transition: "color 0.2s",
          }}
        >
          {value}
        </div>
      </div>
      {href && (
        <div style={{ marginLeft: "auto", color: hovered ? "var(--amber)" : "var(--border)", transition: "color 0.2s" }}>
          <FiArrowUpRight size={18} />
        </div>
      )}
    </div>
  );

  return href ? (
    <a href={href} style={{ textDecoration: "none", display: "block", color: "inherit" }}>
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
};

const Contact = () => {
  return (
    <section
      id="contact"
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
        05
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 14 }}>
            — Reach Out
          </div>
          <h2
            className="bebas"
            style={{
              fontSize: "clamp(48px, 7vw, 80px)",
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            Let's{" "}
            <span style={{ color: "var(--amber)" }}>Connect</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* Left: big text + contact cards */}
          <div>
            <p
              style={{
                fontSize: 18,
                color: "var(--muted-2)",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: 40,
                maxWidth: 420,
              }}
            >
              I'm always open to new opportunities, collaborations, and conversations.
              Whether you have a role in mind or just want to chat tech — let's talk.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <ContactItem
                icon={<MdEmail size={20} />}
                label="Email"
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
              <ContactItem
                icon={<FaPhone size={16} />}
                label="Phone"
                value={CONTACT.phoneNo}
                href={`tel:${CONTACT.phoneNo.replace(/\D/g, "")}`}
              />
              <ContactItem
                icon={<FaLocationDot size={18} />}
                label="Location"
                value={CONTACT.address}
              />
            </div>
          </div>

          {/* Right: social + availability card */}
          <div>
            {/* Availability card */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--amber)",
                padding: "28px 32px",
                marginBottom: 24,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 8px rgba(34,197,94,0.6)",
                    animation: "pulse-amber 2s infinite",
                  }}
                />
                <span
                  className="mono"
                  style={{ fontSize: 11, color: "#22c55e", letterSpacing: "0.15em", textTransform: "uppercase" }}
                >
                  Available for work
                </span>
              </div>
              <p style={{ fontSize: 14, color: "var(--muted-2)", lineHeight: 1.7, fontWeight: 300 }}>
                Currently open to full-time roles and freelance contracts.
                Specializing in Python, React, Java, and Spring Boot.
              </p>
            </div>

            {/* Social links */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                padding: "28px 32px",
              }}
            >
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  color: "var(--amber)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Find me online
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: <FaLinkedin />, label: "LinkedIn", handle: "/william-d-chandler", url: "https://www.linkedin.com/in/william-d-chandler/" },
                  { icon: <FaGithub />, label: "GitHub", handle: "/wchandler2020", url: "https://github.com/wchandler2020" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      textDecoration: "none",
                      padding: "10px 14px",
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--amber)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  >
                    <span style={{ color: "var(--muted)", fontSize: 16 }}>{social.icon}</span>
                    <span style={{ fontWeight: 500, fontSize: 14, color: "var(--text)" }}>{social.label}</span>
                    <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--muted)", fontFamily: "'JetBrains Mono', monospace" }}>
                      {social.handle}
                    </span>
                    <FiArrowUpRight size={14} style={{ color: "var(--muted)" }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            marginTop: 72,
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>
            © 2025 William Chandler
          </span>
          <span className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>
            Full Stack Developer · Chicago, IL
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;