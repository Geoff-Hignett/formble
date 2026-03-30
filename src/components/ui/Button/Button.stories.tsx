import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: "UI/Button",
    component: Button,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Button",
        variant: "primary",
        size: "md",
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: "flex", gap: 12 }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        children: "Disabled",
        disabled: true,
    },
};

export const Accessible: Story = {
    args: {
        children: "Accessible Button",
        focusRing: "default",
    },
};

export const NoFocusRing: Story = {
    args: {
        children: "No Focus Ring",
        focusRing: "none",
    },
    parameters: {
        docs: {
            description: {
                story: "⚠️ This disables visible focus styles and is not WCAG AA compliant. Use only with strong justification.",
            },
        },
    },
};
