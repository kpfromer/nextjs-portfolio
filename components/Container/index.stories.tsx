import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Container, { ContainerProps } from '.';

export default {
  title: 'Comonents/Container',
  component: Container,
} as Meta;

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Body',
};
