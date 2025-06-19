// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaPaintBrush, FaYoutube, FaLightbulb, FaProjectDiagram } from 'react-icons/fa';
import { SiKotlin, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiFirebase, SiPostgresql, SiPython, SiHtml5, SiCss3, SiFlutter, SiDart } from 'react-icons/si';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: false },
    transition: { staggerChildren: 0.1 }
  };

  const skillItem = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    whileHover: { scale: 1.1 },
    transition: { type: "spring", stiffness: 300 }
  };

  return (
    <section className="about" id="about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About <span>Me</span>
      </motion.h2>
      <div className="about-container">
        
        {/* Introduction */}
        <motion.div 
          className="about-card intro-card"
          {...fadeInUp}
        >
          <h3>Hi, I'm Dev Suthar 👋</h3>
          <p>A multi-skilled developer, creator, and lifelong learner passionate about building impactful digital solutions.</p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div 
          className="timeline"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          <h3 className="sub-title"><FaGraduationCap /> My Journey</h3>
          <motion.div 
            className="timeline-item"
            variants={fadeInUp}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Master of Computer Applications (MCA)</h4>
              <p className="timeline-date">2024 – Present</p>
              <p>Strengthening my technical depth and exploring advanced systems. Current CGPA: 7.08.</p>
            </div>
          </motion.div>
          <motion.div 
            className="timeline-item"
            variants={fadeInUp}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Bachelor of Science in IT (B.Sc. IT)</h4>
              <p className="timeline-date">2021 – 2024</p>
              <p>Gained a solid foundation in programming, databases, and web tech. CGPA: 7.43.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Major Projects */}
        <motion.div 
          className="about-card projects-card"
          {...fadeInUp}
        >
          <h3 className="sub-title"><FaProjectDiagram /> Major Projects</h3>
          <motion.ul
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            <motion.li variants={fadeInUp}><SiKotlin /> Built Android apps with Kotlin.</motion.li>
            <motion.li variants={fadeInUp}><SiFirebase /> Used Firebase for real-time databases.</motion.li>
            <motion.li variants={fadeInUp}><SiReact /> Developed dynamic web applications with the MERN Stack.</motion.li>
          </motion.ul>
        </motion.div>

        {/* Tech Stack */}
        <motion.div 
          className="about-card skills-card"
          {...fadeInUp}
        >
          <h3 className="sub-title"><FaCode /> Technologies I Use</h3>
          <motion.div 
            className="skills-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            <motion.div className="skill-item" variants={skillItem}><SiKotlin /> Kotlin</motion.div>
            <motion.div className="skill-item" variants={skillItem}><SiDart /> Dart</motion.div>
            <motion.div className="skill-item" variants={skillItem}><SiFlutter /> Flutter</motion.div>
            <motion.div className="skill-item" variants={skillItem}><SiJavascript /> JavaScript</motion.div>
            <motion.div className="skill-item" variants={skillItem}><SiPython /> Python</motion.div>
            <motion.div className="skill-item" variants={skillItem}><SiHtml5 /> HTML</motion.div>
            <motion.div className="skill-item" variants={skillItem}><SiCss3 /> CSS</motion.div>
            <motion.div className="skill-item" variants={skillItem}><SiReact /> React</motion.div>
            <motion.div className="skill-item" variants={skillItem}><SiNodedotjs /> Node.js</motion.div>
            <motion.div className="skill-item" variants={skillItem}><SiMongodb /> MongoDB</motion.div>
            <motion.div className="skill-item" variants={skillItem}><SiFirebase /> Firebase</motion.div>
            <motion.div className="skill-item" variants={skillItem}><SiPostgresql /> PostgreSQL</motion.div>
          </motion.div>
        </motion.div>

        {/* Creative Side */}
        <motion.div 
          className="about-card creative-card"
          {...fadeInUp}
        >
          <h3 className="sub-title"><FaPaintBrush /> Beyond Code</h3>
          <p><FaYoutube /> As a YouTuber and video editor, I bring a strong visual sense to UI/UX design, blending creativity with technical solutions.</p>
        </motion.div>

        {/* What I can build */}
        <motion.div 
          className="about-card build-card"
          {...fadeInUp}
        >
          <h3 className="sub-title"><FaLightbulb /> What I Can Build</h3>
          <motion.ul
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            <motion.li variants={fadeInUp}>🌐 Websites & Web Applications</motion.li>
            <motion.li variants={fadeInUp}>📱 Android and iOS Apps</motion.li>
            <motion.li variants={fadeInUp}>💻 Custom Software Solutions</motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
