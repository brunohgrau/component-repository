import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Badge } from "./Badge";

// Default Export
const meta = {
  title: "Components/Badge",
  component: Badge,
  args: { text: "Comfort Food" },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {};
