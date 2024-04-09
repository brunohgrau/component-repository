import type { Preview } from "@storybook/react";
import { GlobalDecorators } from "./decorators";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { initialize, mswLoader } from "msw-storybook-addon";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
export const decorators = GlobalDecorators;

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circle",
      items: ["light", "dark"],
    },
  },
};
