import { Button } from "./Button";
import type { Meta, StoryObj } from '@storybook/react'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement>  {
    children: React.ReactNode;
}

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button'
    }
}

export const Secondary: Story = {
    args: {
        primary: false,
        label: 'Button'
    }
}