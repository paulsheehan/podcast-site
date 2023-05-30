import BlockContainer from './BlockContainer';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BlockContainer> = {
  title: 'BlockContainer',
  component: BlockContainer,
};

export default meta;
type Story = StoryObj<typeof BlockContainer>;

export const Primary: Story = {
  args: {
  },
};