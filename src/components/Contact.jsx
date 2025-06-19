// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    content: 'devsp2106@gmail.com',
    href: 'mailto:devsp2106@gmail.com',
  },
  {
    icon: <FaPhone />,
    title: 'Phone',
    content: '+91-7016686728',
    href: 'tel:+917016686728',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    content: 'Gujarat, India',
    href: 'https://www.google.com/maps/place/Gujarat',
  },
];

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="contact" id="contact">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact <span>Me</span>
      </motion.h2>
      
      <motion.p 
        className="contact-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I'd love to hear from you — whether it's a project, collaboration, opportunity, or just a tech talk. Let's connect!
      </motion.p>

      <motion.div 
        className="contact-cards-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {contactInfo.map((item, index) => (
          <motion.a 
            href={item.href} 
            key={index} 
            className="contact-card" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <motion.div 
              className="contact-icon"
              variants={iconVariants}
              animate={hoveredIndex === index ? "hover" : ""}
            >
              {item.icon}
            </motion.div>
            <motion.div 
              className="contact-details"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {item.content}
              </motion.p>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="thank-you-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '2rem',
          background: 'var(--card-bg)',
          borderRadius: '15px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ color: 'var(--text-color)', marginBottom: '1rem' }}
        >
          Thank You for Visiting!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ color: 'var(--text-color)' }}
        >
          I appreciate you taking the time to explore my portfolio. Looking forward to connecting with you!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;
