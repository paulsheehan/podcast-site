import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Link: Story = {
  args: {
    primary: false,
    label: 'Button',
    link: true,
  },
};

export const Nav: Story = {
  args: {
    primary: false,
    label: 'Button',
    link: false,
    nav: true,
  },
};
