import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Technologies from "./components/technologies/Technologies";
import Experience from "./components/experience/Experience";
import Project from "./components/projects/Project";
import ProjectPage from './components/projects/ProjectPage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { PROJECTS } from "./constants";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 w-full h-full -z-10">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Navbar />
                  <Hero />
                  <About />
                  <Technologies />
                  <Experience />
                  <Project />
                  <Contact />
                </>
              } 
            />
            <Route path="/project/:id" element={<ProjectPageWrapper />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const ProjectPageWrapper = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === parseInt(id)); // Find the project by ID

  return (
    <>
      <Navbar />
      {project ? <ProjectPage data={project} /> : <div>Project not found</div>}
    </>
  );
}

export default App;
