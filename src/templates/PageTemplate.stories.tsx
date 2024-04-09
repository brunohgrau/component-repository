import React, { FunctionComponent } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PageTemplate } from "./PageTemplate";

const meta = {
  title: "Templates/PageTemplate",
  component: PageTemplate,
  tags: ["autodocs"],
  argTypes: {
    children: { control: { type: "text" } }, // Add control for children prop
  },
} satisfies Meta<typeof PageTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

const DummyComponent: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <div style={{ padding: 60 }}>{children}</div>;
};

export const Default: Story = {
  args: {
    children: (
      <DummyComponent>
        Default Content with scrollable header and navigation items + footer
      </DummyComponent>
    ),
  },
};
