import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import SocialLink, { SocialLinkProps } from '.';

export default {
  title: 'Components/SocialLink',
  component: SocialLink,
} as Meta;

const Template: Story<SocialLinkProps> = (args) => <SocialLink {...args} />;

export const Default = Template.bind({});
Default.args = {};
