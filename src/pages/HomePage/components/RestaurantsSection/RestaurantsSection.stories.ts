import type { Meta, StoryObj } from "@storybook/react";
import { RestaurantsSection } from "./RestaurantsSection";
import { rest } from "msw";
import { BASE_URL } from "../../../../api";
import { restaurants } from "../../../../stub/restaurants";

const meta = {
  title: "Pages/HomePage/Components/RestaurantsSection",
  component: RestaurantsSection,
  tags: ["autodocs"],
} satisfies Meta<typeof RestaurantsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Our Favorite Picks",
  },
};
