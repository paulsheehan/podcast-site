import { LinkButton } from './LinkButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LinkButton> = {
  title: 'LinkButton',
  component: LinkButton,
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  args: {
    primary: true,
    children: 'Button',
    href: '#',
  },
};

export const Nav: Story = {
  args: {
    primary: false,
    children: 'Button',
    small: true,
    href: '#',
  },
};

export const Inline: Story = {
  args: {
    primary: false,
    children: 'Button',
    small: true,
    href: '#',
    inline: true,
  },
};
