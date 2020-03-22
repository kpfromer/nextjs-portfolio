import React from 'react';
import About from '../components/layout/About';
import Landing from '../components/layout/Landing';
import Skills from '../components/layout/Skills';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Contact from '../components/layout/Contact';
import Projects from '../components/layout/Projects';
import BlogPosts from '../components/blog/BlogPosts';

export default () => (
  <div>
    <SEO title="Main" />
    <div>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <BlogPosts />
      <Contact />
    </div>
    <Footer />
  </div>
);
