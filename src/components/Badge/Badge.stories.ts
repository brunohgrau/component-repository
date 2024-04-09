import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  args: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Badge",
  },
};
