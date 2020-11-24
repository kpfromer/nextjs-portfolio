import React from 'react';
import { Link } from '../common/Link';
import { Title } from '../common/Title';
import { Section } from '../common/Section';
import { BoxProps, Button, Text } from 'rebass';

const Skills: React.FC<Omit<BoxProps, 'css'>> = (props) => {
  return (
    <Section {...props}>
      <Title>Skills</Title>
      <Text>
        I spend most of my time with React, Mongodb, Angular, Nodejs, and Java and have over three
        years of experience with JavaScript. Over the past summer (2019) I have learned C++ to build
        an{' '}
        <Link outside to="https://github.com/kpfromer/nand2tetris/tree/master/06">
          assembler
        </Link>
        , a higher level{' '}
        <Link outside to="https://github.com/kpfromer/nand2tetris/tree/master/vm">
          virtual stack manipulation language
        </Link>{' '}
        and a{' '}
        <Link outside to="https://github.com/kpfromer/nand2tetris/tree/master/compiler">
          compiler
        </Link>{' '}
        to learn about computer systems in preparation for college. Building this computer system
        has given me a great appreciation for all the hard work past computer scientists have done
        for us.
      </Text>

      <Button
        mt={3}
        fontSize={3}
        as="a"
        href="https://drive.google.com/file/d/1KUxBSQwj87LBoHmsuRAyPgfN6F6oo5kR/view?usp=sharing"
        target="_blank"
      >
        Download Resume
      </Button>
    </Section>
  );
};

export default Skills;
