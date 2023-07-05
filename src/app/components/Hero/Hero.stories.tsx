// Navbar.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';
import { Button } from '../Button/Button';
import { Primary } from '../Button/Button.stories';

const meta: Meta<typeof Hero> = {
  title: 'Hero',
  component: Hero,
};

const pageContent = (
  <>
    <h1>
      Your Daily <span className="block red">Podcast</span>
    </h1>
    <p>We cover all kinds of categories and a weekly special guest.</p>
    <Button {...Primary.args} />
  </>
);

export default meta;
type Story = StoryObj<typeof Hero>;
export const Landing: Story = {
  args: {
    children: pageContent,
  },
};
