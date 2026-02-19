import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Technologies from "./components/technologies/Technologies";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import ProjectDetail from "./components/projects/ProjectDetail";
import Contact from "./components/contact/Contact";
import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes, useParams } from "react-router-dom";
import { PROJECTS } from "./constants";

function App() {
  return (
    <Router>
      <>
        {/* Google Fonts */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
          
          :root {
            --bg: #06070a;
            --surface: #0c0f16;
            --surface-2: #12161f;
            --border: #1c2130;
            --amber: #e8a030;
            --amber-dim: #e8a03020;
            --teal: #38bdf8;
            --teal-dim: #38bdf810;
            --text: #eeeef0;
            --muted: #5a6270;
            --muted-2: #8892a0;
          }

          * { box-sizing: border-box; margin: 0; padding: 0; }
          
          html { scroll-behavior: smooth; }

          body {
            background: var(--bg);
            color: var(--text);
            font-family: 'Outfit', sans-serif;
            -webkit-font-smoothing: antialiased;
          }

          ::selection { background: var(--amber); color: #06070a; }

          .bebas { font-family: 'Bebas Neue', sans-serif; }
          .mono { font-family: 'JetBrains Mono', monospace; }

          /* Scrollbar */
          ::-webkit-scrollbar { width: 4px; }
          ::-webkit-scrollbar-track { background: var(--bg); }
          ::-webkit-scrollbar-thumb { background: var(--amber); border-radius: 2px; }

          /* Section label style */
          .section-label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--amber);
          }

          /* Amber glow button */
          .btn-amber {
            background: var(--amber);
            color: #06070a;
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
            font-size: 13px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 12px 28px;
            border: none;
            cursor: pointer;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          .btn-amber:hover { background: #f5b84a; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(232,160,48,0.35); }

          /* Ghost button */
          .btn-ghost {
            background: transparent;
            color: var(--text);
            font-family: 'Outfit', sans-serif;
            font-weight: 600;
            font-size: 13px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 11px 28px;
            border: 1px solid var(--border);
            cursor: pointer;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          .btn-ghost:hover { border-color: var(--amber); color: var(--amber); }

          /* Card hover */
          .project-card {
            background: var(--surface);
            border: 1px solid var(--border);
            transition: all 0.3s;
            cursor: pointer;
            overflow: hidden;
          }
          .project-card:hover { border-color: var(--amber); transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.5); }

          /* Timeline dot */
          .tl-dot {
            width: 12px; height: 12px;
            border-radius: 50%;
            background: var(--amber);
            flex-shrink: 0;
            position: relative;
            margin-top: 6px;
            box-shadow: 0 0 12px rgba(232,160,48,0.5);
          }
          .tl-dot::before {
            content: '';
            position: absolute;
            inset: -4px;
            border-radius: 50%;
            border: 1px solid rgba(232,160,48,0.3);
          }

          /* Tech badge */
          .tech-tag {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            background: var(--surface-2);
            border: 1px solid var(--border);
            color: var(--teal);
            padding: 4px 10px;
            border-radius: 2px;
            letter-spacing: 0.05em;
            display: inline-block;
          }
          
          /* Animated underline link */
          .link-underline {
            position: relative;
            color: var(--muted-2);
            text-decoration: none;
            transition: color 0.2s;
          }
          .link-underline::after {
            content: '';
            position: absolute;
            bottom: -2px; left: 0;
            width: 0; height: 1px;
            background: var(--amber);
            transition: width 0.3s;
          }
          .link-underline:hover { color: var(--amber); }
          .link-underline:hover::after { width: 100%; }

          /* Grain overlay */
          body::before {
            content: '';
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.025;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
            background-size: 200px 200px;
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; } to { opacity: 1; }
          }
          @keyframes slideRight {
            from { width: 0; } to { width: 100%; }
          }
          @keyframes pulse-amber {
            0%, 100% { box-shadow: 0 0 0 0 rgba(232,160,48,0.4); }
            50% { box-shadow: 0 0 0 8px rgba(232,160,48,0); }
          }

          .animate-fade-up { animation: fadeUp 0.7s ease forwards; }
          .animate-fade-up-d1 { animation: fadeUp 0.7s 0.15s ease both; }
          .animate-fade-up-d2 { animation: fadeUp 0.7s 0.3s ease both; }
          .animate-fade-up-d3 { animation: fadeUp 0.7s 0.45s ease both; }
          .animate-fade-up-d4 { animation: fadeUp 0.7s 0.6s ease both; }
          .animate-fade-up-d5 { animation: fadeUp 0.7s 0.75s ease both; }
          .animate-fade-in { animation: fadeIn 1s 0.8s ease both; }

          /* Thumbnail active */
          .thumb-active { border-color: var(--amber) !important; }
          .thumb { border: 2px solid var(--border); transition: border-color 0.2s; cursor: pointer; }
          .thumb:hover { border-color: var(--muted); }
        `}</style>

        <Routes>
          <Route
            path="/"
            element={
              <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
                <Navbar />
                <main style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
                  <Hero />
                  <About />
                  <Technologies />
                  <Experience />
                  <Projects />
                  <Contact />
                </main>
              </div>
            }
          />
          <Route path="/project/:id" element={<ProjectDetailWrapper />} />
        </Routes>
      </>
    </Router>
  );
}

const ProjectDetailWrapper = () => {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === parseInt(id));
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        {project ? <ProjectDetail data={project} /> : (
          <div style={{ padding: '120px 0', textAlign: 'center', color: 'var(--muted)' }}>Project not found</div>
        )}
      </main>
    </div>
  );
};

export default App;