import ContactForm from '@components/ContactForm';
import Container from '@components/Container';
import Header from '@components/Header';
import { Heading } from '@components/Heading';
import Page from '@components/Page';
import React from 'react';

export interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <Page title="Contact" description="Contact me!">
      <Header />

      <Container>
        <Heading id="about-me">About Me</Heading>

        <p>
          Hi! My name is <span className="text-bold">Kyle Pfromer</span>. I am a full stack
          developer that works a lot with TypeScript and JavaScript (though I have experience in C++
          and Java). I am currently a computer science student at {/* TODO: rel */}
          <a className="text-yellow-600 underline" href="https://www.colorado.edu/">
            CU Boulder
          </a>
          . When not programming I am snowboarding, hiking and biking.
        </p>

        <Heading id="contact">Contact</Heading>
        <ContactForm />
      </Container>
    </Page>
  );
};

export default ContactPage;
