import React, { useState, useEffect } from "react";
import myLogo from "../../assets/williamchandlerlogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(6,7,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                background: "var(--amber)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 18,
                color: "#06070a",
                letterSpacing: "0.05em",
              }}
            >
              WC
            </div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "var(--muted-2)",
                letterSpacing: "0.1em",
              }}
            >
              wchandler.dev
            </span>
          </div>
        </Link>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* Nav links (desktop) */}
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="link-underline"
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width: 1, height: 20, background: "var(--border)" }} />

          {/* Social icons */}
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a href="https://www.linkedin.com/in/william-d-chandler/" target="_blank" rel="noreferrer"
              style={{ color: "var(--muted)", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--amber)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
            >
              <FaLinkedin size={18} />
            </a>
            <a href="https://github.com/wchandler2020" target="_blank" rel="noreferrer"
              style={{ color: "var(--muted)", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--amber)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
            >
              <FaGithub size={18} />
            </a>
            <a href="#" target="_blank" rel="noreferrer"
              style={{ color: "var(--muted)", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--amber)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
            >
              <FaSquareXTwitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;