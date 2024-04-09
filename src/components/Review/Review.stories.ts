import type { Meta, StoryObj } from "@storybook/react";
import { Review } from "./Review";

const meta = {
  title: "Components/Review",
  component: Review,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  args: {},
  argTypes: {
    rating: {
      control: {
        type: "range",
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
  },
} satisfies Meta<typeof Review>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Excellent: Story = {
  args: {
    rating: 5,
  },
};
export const VeryGood: Story = {
  args: {
    rating: 4.3,
  },
};
export const Adequate: Story = {
  args: {
    rating: 2.5,
  },
};
export const VeryPoor: Story = {
  args: {
    rating: 1,
  },
};
