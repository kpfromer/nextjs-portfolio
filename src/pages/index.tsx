import React from 'react';
import About from '../components/layout/About';
import Landing from '../components/layout/Landing';
import Skills from '../components/layout/Skills';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import Contact from '../components/layout/Contact';
import Projects from '../components/layout/Projects';
import BlogPosts from '../components/layout/BlogPosts';
import { Box } from 'rebass';
import Experience from '../components/layout/Experience';

export default () => {
  const sections = [
    // TODO: work on about text content
    <About key={0} />,
    <Experience key={1} />,
    // TODO: work on skills
    // <Skills key={2} />,
    <Projects key={3} />,
    <BlogPosts key={4} />,
    <Contact key={5} />
  ];
  return (
    <div>
      <SEO title="Home" />
      <Box>
        <Landing />
        {/* Alternating background alt for sections */}
        {sections.map((section, index) =>
          React.cloneElement(section, index % 2 === 1 ? { bg: 'backgroundAlt' } : {})
        )}
      </Box>
      <Footer />
    </div>
  );
};
