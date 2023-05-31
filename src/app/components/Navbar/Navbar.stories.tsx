// Navbar.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import imageFile from './public/logo.png';

const meta: Meta<typeof Navbar> = {
  title: 'Navbar',
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;
export const Primary: Story = {
  args: {},
};
