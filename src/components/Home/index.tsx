import React from 'react';
import { Box } from 'rebass';
import About from './About';
import BlogPosts from './BlogPosts';
import { Contact } from './Contact';
import Experience from './Experience';
import Landing from './Landing';
import Projects from './Projects';

export const Home: React.FC = () => {
  const sections = [
    // TODO: work on about text content
    <About key={0} />,
    <Experience key={1} />,
    // TODO: work on skills
    // <Skills key={2} />,
    <Projects key={3} />,
    <BlogPosts key={4} />,
    <Contact key={5} />,
  ];
  return (
    <Box>
      <Landing />
      {/* Alternating background alt for sections */}
      {sections.map((section, index) =>
        React.cloneElement(section, index % 2 === 1 ? { bg: 'backgroundAlt' } : {}),
      )}
    </Box>
  );
};
