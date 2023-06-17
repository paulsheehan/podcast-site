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
    children: <span>Subscribe</span>,
  },
};

export const Nav: Story = {
  args: {
    primary: false,
    small: true,
    children: <span>About</span>
  },
};
