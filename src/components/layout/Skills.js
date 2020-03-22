import React from 'react';
import { css } from '@emotion/core';
import Link from '../Link';
import Title from '../Title';
import Section from '../Section';

export default () => (
  <Section
    css={css`
      background-color: #f6f7fd;
    `}
  >
    <Title>Skills</Title>
    <p>
      I spend most of my time with React, Mongodb, Angular, Nodejs, and Java and have over three years of experience
      with JavaScript. Over the past summer (2019) I have learned C++ to build an{' '}
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
      to learn about computer systems in preparation for college. Building this computer system has given me a great
      appreciation for all the hard work past computer scientists have done for us.
    </p>
  </Section>
);
