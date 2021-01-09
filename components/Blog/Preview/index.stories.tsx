import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Preview, { PreviewProps } from '.';

export default {
  title: 'Blog/Preview',
  component: Preview,
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<PreviewProps> = (args) => <Preview {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  coverImage: { src: '/test.jpg', width: 5450, height: 3096 },
  created: '2020-12-01',
};
