import { defineConfig } from "orval";

export default defineConfig({
  ecom: {
    input: {
      target: "./schema.json",
    },
    output: {
      mock: true,
      mode: "split",
      target: "./generated/schema.ts",
    },
    hooks: {
      afterAllFilesWrite: 'prettier generated/ --write',
    },
  },
});
