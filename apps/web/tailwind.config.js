import sharedConfig from "@repo/tailwind-config/tailwind.config.js";

export default {
  ...sharedConfig,
  content: [
    ...sharedConfig.content,
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
   
  ],
  theme: {
    ...sharedConfig.theme,
    extend: {
      ...sharedConfig.theme?.extend,
    },
  },
  plugins: sharedConfig.plugins || [],
};
