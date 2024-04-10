import type { Meta, StoryObj } from "@storybook/react";
import { ErrorBlock } from "./ErrorBlock";
import sushi from "../../assets/images/sushi.svg";

const meta = {
  title: "Components/ErrorBlock",
  component: ErrorBlock,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ErrorBlock>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "This is not the food you’re looking for.",
    body: "There seems that there are no restaurants in this category yet. Try to come back later?",
    image: "Falta imagem",
    buttonText: "See all restaurants",
  },
};
