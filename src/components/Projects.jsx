// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectData = [
  {
    title: 'WhoWear (Clothing Website)',
    category: 'Web',
    image: 'https://via.placeholder.com/400x250.png?text=WhoWear',
    tech: ['React', 'Node.js', 'MongoDB'],
    description: 'An e-commerce fashion site showcasing dynamic product displays, category filters, and secure checkout.',
    myRole: 'Frontend integration and responsive design.',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'DS Car Show',
    category: 'Web',
    image: 'https://via.placeholder.com/400x250.png?text=DS+Car+Show',
    tech: ['Django', 'SQLite', 'Bootstrap'],
    description: 'A platform for showcasing latest and upcoming cars with direct video reviews from YouTube.',
    myRole: 'UI Design, Admin dashboard, and YouTube integration.',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Finance Tracker App',
    category: 'Web',
    image: 'https://via.placeholder.com/400x250.png?text=Finance+Tracker',
    tech: ['MERN Stack'],
    description: 'A finance and expense tracking web app for managing budgets, invoices, and trends.',
    myRole: 'API development and MongoDB schema design.',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Plug & Charge Zone (EV App)',
    category: 'Mobile',
    image: 'https://via.placeholder.com/400x250.png?text=Plug+&+Charge',
    tech: ['Kotlin', 'Firebase'],
    description: 'An app showing real-time charging station availability for electric vehicles.',
    myRole: 'Map integration, Firebase auth, and real-time updates.',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Grocery Purchase App',
    category: 'Mobile',
    image: 'https://via.placeholder.com/400x250.png?text=Grocery+App',
    tech: ['Flutter', 'Firebase', 'SQLite'],
    description: 'A grocery app with cart, bill generation, and PDF export, for both Android & web.',
    myRole: 'Full app development, billing logic, and PDF generation.',
    liveLink: '#',
    sourceLink: '#',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredProjects = projectData.filter((project) =>
    filter === 'All' ? true : project.category === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <section className="projects" id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My <span>Projects</span>
      </motion.h2>

      <motion.div 
        className="project-filters"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.button 
          className={filter === 'All' ? 'active' : ''} 
          onClick={() => handleFilterChange('All')}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          All
        </motion.button>
        <motion.button 
          className={filter === 'Web' ? 'active' : ''} 
          onClick={() => handleFilterChange('Web')}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Web
        </motion.button>
        <motion.button 
          className={filter === 'Mobile' ? 'active' : ''} 
          onClick={() => handleFilterChange('Mobile')}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Mobile
        </motion.button>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          className="projects-grid"
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              className="project-card" 
              key={index}
              variants={projectVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <motion.img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="project-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div 
                className="project-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.p 
                  className="project-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>
                <motion.p 
                  className="project-role"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <strong>My Role:</strong> {project.myRole}
                </motion.p>
                <motion.div 
                  className="project-links"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo <FaExternalLinkAlt />
                  </motion.a>
                  <motion.a 
                    href={project.sourceLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Source Code <FaGithub />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Projects;
