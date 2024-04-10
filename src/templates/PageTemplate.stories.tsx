import React, { FunctionComponent } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PageTemplate } from "./PageTemplate";
import { store } from "../app-state";
import { cartItems } from "../stub/cart-items";

const meta = {
  title: "Templates/PageTemplate",
  component: PageTemplate,
  tags: ["autodocs"],
  argTypes: {
    children: { control: { type: "text" } }, // Add control for children prop
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof PageTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

const DummyComponent: React.FC<React.PropsWithChildren<unknown>> = ({
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

export const WithItemsInTheCart: Story = {
  parameters: {
    store: { initialState: { cart: { items: cartItems } } },
  },
};

export const StickyHeader: Story = {
  args: {
    type: "sticky-header",
    children: (
      <DummyComponent>
        {" "}
        Template with sticky header on desktop and navigation items. Try
        scrolling
      </DummyComponent>
    ),
  },
};

export const Basic: Story = {
  args: {
    type: "basic",
    children: (
      <DummyComponent>
        {" "}
        Simple template with scrollable header and no navigation items
      </DummyComponent>
    ),
  },
};
