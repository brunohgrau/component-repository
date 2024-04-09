import type { Meta, StoryObj } from "@storybook/react";
import styled, { css } from "styled-components";
import { Body } from "../typography/Body";
import { Icon } from "./Icon";

const icons = [
  "arrow-right",
  "arrow-left",
  "cross",
  "cart",
  "minus",
  "plus",
  "moon",
  "sun",
  "star",
];

const meta = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playgroundt: Story = {
  args: {
    name: "arrow-right",
    color: "red",
    size: 24,
  },
};
