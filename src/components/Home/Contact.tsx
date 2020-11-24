import React from 'react';
import { Title } from '../common/Title';
import { Section } from '../common/Section';
import { Box, BoxProps, Button } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';

export const Contact: React.FC<Omit<BoxProps, 'css'>> = (props) => {
  return (
    <Section {...props}>
      <Title>Contact</Title>
      <Box as="form" action="https://formspree.io/mdokobow" method="POST">
        <Label htmlFor="email">Your email:</Label>
        <Input id="email" type="email" name="_replyto" required />

        <Label htmlFor="message" mt={3}>
          Your message:
        </Label>
        <Textarea id="message" name="message" required />

        <input type="text" name="_gotcha" style={{ display: 'none' }} />

        <Button type="submit" mt={3} px={4} fontSize={3} sx={{ cursor: 'pointer' }}>
          Send
        </Button>
      </Box>
    </Section>
  );
};
