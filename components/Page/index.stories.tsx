import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Page, { PageProps } from '.';
import NextLink from 'next/link';

export default {
  title: 'Components/Page',
  component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      Body of Page
      <NextLink href="/other-page">Link</NextLink>
    </>
  ),
};
