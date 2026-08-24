import React from "react";
import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    nextjs: { appDirectory: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: "todo" },
    options: {
      storySort: {
        order: [
          "Design System",
          ["Welcome"],
          "Foundations",
          ["Colors", "Typography", "Spacing", "Radius & Shadows", "Icons"],
          "Atoms",
          "Molecules",
          "Organisms",
          "Screens",
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="font-sans text-ink antialiased">
        <Story />
      </div>
    ),
  ],
};

export default preview;
